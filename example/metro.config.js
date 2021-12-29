const path = require('path');
const fs = require('fs');
const escape = require('escape-string-regexp');
const blacklist = require('metro-config/src/defaults/blacklist');

const root = path.resolve(__dirname, '..');
const packages = path.resolve(root, 'packages');

// List all packages under `packages/`
const workspaces = fs
  .readdirSync(packages)
  .map((p) => path.join(packages, p))
  .filter(
    (p) =>
      fs.statSync(p).isDirectory() &&
      fs.existsSync(path.join(p, 'package.json'))
  );

// Get the list of dependencies for all packages in the monorepo
const modules = ['@expo/vector-icons']
  .concat(
    ...workspaces.map((it) => {
      const pak = JSON.parse(
        fs.readFileSync(path.join(it, 'package.json'), 'utf8')
      );

      // We need to make sure that only one version is loaded for peerDependencies
      // So we blacklist them at the root, and alias them to the versions in example's node_modules
      return pak.peerDependencies ? Object.keys(pak.peerDependencies) : [];
    })
  )
  .sort()
  .filter(
    (m, i, self) =>
      // Remove duplicates and package names of the packages in the monorepo
      self.lastIndexOf(m) === i && !m.startsWith('@react-native-elements/')
  );

module.exports = {
  projectRoot: __dirname,

  // We need to watch the root of the monorepo
  // This lets Metro find the monorepo packages automatically using haste
  // This also lets us import modules from monorepo root
  watchFolders: [root],

  resolver: {
    // We need to blacklist the peerDependencies we've collected in packages' node_modules
    blacklistRE: blacklist(
      [/website\/.*/].concat(
        ...workspaces.map((it) =>
          modules.map(
            (m) =>
              new RegExp(`^${escape(path.join(it, 'node_modules', m))}\\/.*$`)
          )
        )
      )
    ),

    // When we import a package from the monorepo, metro won't be able to find their deps
    // We need to specify them in `extraNodeModules` to tell metro where to find them
    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(root, 'node_modules', name);
      return acc;
    }, {}),
  },

  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
