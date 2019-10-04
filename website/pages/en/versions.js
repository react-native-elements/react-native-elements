/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');
const Container = CompLibrary.Container;

const CWD = process.cwd();

const siteConfig = require(CWD + '/siteConfig.js');
const versions = require(CWD + '/versions.json');

class VersionItem extends React.Component {
  render() {
    const version = this.props.version;
    const versionName = version === 'next' ? 'Next' : version;

    const isCurrentVersion = versions[0] === version;
    const isNext = version === 'next';

    const documentationLink = (
      <a
        href={
          this.props.baseUrl +
          'docs/' +
          (isCurrentVersion ? '' : version + '/') +
          'overview.html'
        }
      >
        Components
      </a>
    );

    const releaseNotesLink = isNext ? null : (
      <a
        href={`https://github.com/react-native-elements/react-native-elements/releases/tag/v${version}`}
      >
        Release Notes
      </a>
    );

    return (
      <tr>
        <th>{versionName}</th>
        <td>{documentationLink}</td>
        <td>{releaseNotesLink}</td>
      </tr>
    );
  }
}

function docUrl(version) {
  if (versions[0] === version) {
    return `${siteConfig.baseUrl}docs/overview.html`;
  }
  return `${siteConfig.baseUrl}docs/${version}/overview.html`;
}

const ReleaseNotes = ({ version }) => (
  <a
    href={`https://github.com/react-native-elements/react-native-elements/releases/tag/v${version}`}
    target="_blank"
  >
    Release Notes
  </a>
);

const Documentation = ({ version }) => <a href={docUrl(version)}>Components</a>;

class Versions extends React.Component {
  render() {
    const preReleaseVersions = versions.filter(a => a.includes('beta'));
    let stableVersions = versions.filter(a => !a.includes('beta'));
    const pastVersions =
      stableVersions.length > 1 ? stableVersions.splice(1) : [];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer versionsContainer">
          <div className="post">
            <header className="postHeader">
              <h1 style={{ marginTop: 0 }}>{siteConfig.title + ' versions'}</h1>
            </header>

            <p style={{ maxWidth: 640 }}>
              New versions of this project are released ever so often. You will
              see versions here for releases that either contain features or
              breaking changes. Since patch releases have no changes to the api,
              they aren't posted here.
            </p>

            <section>
              <h3>Latest versions</h3>
              <p>
                Contains changes that are up and coming in the next feature
                release.
              </p>

              <table className="versions">
                <tbody>
                  <tr>
                    <th>next</th>
                    <td>
                      <Documentation version="next" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h3>Current version (Stable)</h3>
              <p>
                This is the version that is configured automatically when you
                first install this project.
              </p>
              <table className="versions">
                <tbody>
                  {stableVersions.map(function(version) {
                    return (
                      <VersionItem
                        key={'version_' + version}
                        version={version}
                        baseUrl={siteConfig.baseUrl}
                      />
                    );
                  })}
                </tbody>
              </table>
            </section>

            {preReleaseVersions.length > 0 && (
              <section>
                <h3>Pre-release versions</h3>
                <p>
                  May sometimes introduce new changes that might break existing
                  functionality.
                </p>

                <table className="versions">
                  <tbody>
                    {preReleaseVersions.map(a => (
                      <tr key={a}>
                        <th>{a}</th>
                        <td>
                          <Documentation version={a} />
                        </td>
                        <td>
                          <ReleaseNotes version={a} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}

            {pastVersions.length > 0 && (
              <section>
                <h3>Past Versions</h3>

                <p>
                  Here you can find documentation for previous versions of React
                  Native Elements.
                </p>

                <table className="versions">
                  <tbody>
                    {pastVersions.map(version => (
                      <tr key={version}>
                        <th>{version}</th>
                        <td>
                          <Documentation version={version} />
                        </td>
                        <td>
                          <ReleaseNotes version={version} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Versions;
