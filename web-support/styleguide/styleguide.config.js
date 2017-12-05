const path = require('path');
const sections = require('./sections.json');

// require: [path.join(__dirname, '../../src/form/FormLabel')],

const getExampleFilename = componentPath => {
  let baseName = path.basename(componentPath).replace(/\.jsx?$/, '.md');
  if (baseName === 'Search.md') baseName = 'SearchBar.md';
  const fullPath = path.resolve(`web-support/styleguide/examples/${baseName}`);
  return fullPath;
};

module.exports = {
  verbose: false,
  serverPort: 6061,
  assetsDir: './assets',
  context: {
    RN: 'react-native',
  },
  skipComponentsWithoutExample: false,
  components: '../../src/**/+([A-Z]*|badge).js',
  sections,
  ignore: [
    '**/NavButton.js',
    '**/DummyNavButton.js',
    '**/Title.js',
    '**/config/**',
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
  ],
  template: './template.html',
  styleguideDir: './public',
  styleguideComponents: {
    Wrapper: path.join(__dirname, './Wrapper'),
  },
  getExampleFilename,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: fileName => {
            if (
              fileName.indexOf(
                path.join('node_modules', 'react-native-vector-icons', 'lib')
              ) != -1
            )
              return true;

            if (fileName.indexOf('node_modules') != -1) return false;
            return true;
          },
          loader: 'babel-loader',
          options: {
            plugins: ['react-native-web/babel'],
            presets: ['es2015', 'stage-0', 'react-native'],
            babelrc: false,
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          loader: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader',
          ],
        },
        {
          test: /\.ttf$/,
          loader: 'file-loader', // or directly file-loader
          include: path.resolve(
            __dirname,
            '../../node_modules/react-native-vector-icons/Fonts'
          ),
        },
      ],
    },
  },
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.resolve.alias['react-native'] = 'react-native-web';
    webpackConfig.resolve.extensions = ['.web.js', '.js'];
    return webpackConfig;
  },
};
