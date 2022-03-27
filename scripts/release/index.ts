import path from 'path';
import fs from 'fs';
import semver from 'semver';
import inquirer from 'inquirer';
import { recommendVersion, updateChangelog } from '@lerna/conventional-commits';

const rootPath = path.resolve(__dirname, '../..');
const pkgRootPath = path.resolve(rootPath, 'packages');

type TPkg = {
  name: string;
  version: string;
  location: string;
  manifestLocation: string;
};

const pkgScope = '@react-native-elements';

class Release {
  static async bump(pkg: TPkg) {
    const manifest = JSON.parse(fs.readFileSync(pkg.manifestLocation, 'utf8'));
    manifest.version = pkg.version;
    fs.writeFileSync(pkg.manifestLocation, JSON.stringify(manifest, null, 2));
    await updateChangelog(pkg, 'independent', {
      changelogPreset: 'conventional-changelog-angular',
      rootPath,
      tagPrefix: 'v',
      version: pkg.version,
    });
  }
  static async recommendVersion(pkg: TPkg): Promise<string> {
    return recommendVersion(pkg, 'independent', {
      changelogPreset: 'conventional-changelog-angular',
      rootPath,
      tagPrefix: 'v',
      prereleaseId: '',
    });
  }

  static async getVersion(): Promise<TPkg[]> {
    const pkgs: TPkg[] = [];
    const pkgPath = fs.readdirSync(pkgRootPath);
    for (const pkg of pkgPath) {
      // if (pkg === 'themed') continue;
      const location = path.resolve(pkgRootPath, pkg);
      const manifestLocation = path.resolve(location, 'package.json');
      const { version } = JSON.parse(fs.readFileSync(manifestLocation, 'utf8'));
      const recommendVersion = await this.recommendVersion({
        name: pkg,
        version,
        location,
        manifestLocation,
      });
      console.log(` - ${pkgScope}/${pkg}:  ${version} => ${recommendVersion}`);
      pkgs.push({
        name: pkg,
        version,
        location,
        manifestLocation,
      });
    }
    console.log();
    return pkgs;
  }

  static questions({ name, version }: TPkg): inquirer.QuestionCollection {
    if (name === 'themed') return [];
    return [
      {
        type: 'list',
        name: name,
        message: `${pkgScope}/${name} `,
        choices: [
          {
            name: 'major ' + semver.inc(version, 'major'),
            value: semver.inc(version, 'major'),
          },
          {
            name: 'minor ' + semver.inc(version, 'minor'),
            value: semver.inc(version, 'minor'),
          },
          {
            name: 'patch ' + semver.inc(version, 'patch'),
            value: semver.inc(version, 'patch'),
          },
          'premajor',
          'preminor',
          'prepatch',
          'prerelease',
        ],
        suffix: version,
      },
      {
        askAnswered: true,
        when(answers) {
          return answers[name].startsWith('pre');
        },
        name: name,
        message: ` `,
        suffix: 'prerelease',
        type: 'list',
        choices: (ans) => [
          semver.inc(version, ans[name], 'alpha'),
          semver.inc(version, ans[name], 'beta'),
          semver.inc(version, ans[name], 'rc'),
          semver.inc(version, ans[name]),
          'manual',
        ],
      },
      {
        askAnswered: true,
        when(answers) {
          return answers[name] === 'manual';
        },
        name: name,
        validate: (input) => {
          return Boolean(semver.valid(input)) || 'Invalid version';
        },
        message: ` `,
        suffix: 'manual',
        type: 'input',
      },
    ];
  }
}

async function main() {
  const pkgs = await Release.getVersion();
  const prompts = pkgs.map(Release.questions).flat();

  inquirer
    .prompt([
      ...prompts,
      { type: 'confirm', name: 'confirm', message: 'confirm' },
    ])
    .then((versions) => {
      pkgs.forEach((pkg) => {
        if (!semver.gt(pkg.version, versions[pkg.name])) {
          throw Error(
            pkg.name + ' version is not greater than current version'
          );
        }
        pkg.version = versions[pkg.name === 'themed' ? 'base' : pkg.name];
        Release.bump(pkg);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
main();
