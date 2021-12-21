import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col col--3 col--offset-1">
              <img
                className="rne-hero-logo"
                src="/img/website/app-preview2.png"
              />
            </div>
            <div className="col col--6 col--offset-1">
              <h1 className="hero__title gradient clip-text">
                {siteConfig.tagline}
              </h1>
              <h1 className="hero__subtitle">
                A React Native framework for making cross platform applications
              </h1>
              <div>
                <Link
                  className={
                    'button button--primary button--lg margin-horiz--sm margin-vert--sm '
                  }
                  style={{ color: 'white' }}
                  to={useBaseUrl('/docs')}
                >
                  Get Started
                </Link>

                <Link
                  className={
                    'button button--secondary button--outline button--lg  margin-horiz--sm margin-vert--sm heroButton'
                  }
                  to={'https://react-native-elements.js.org/'}
                >
                  Playground 🚀
                </Link>

                <div className="bubble bubble-right gradient" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <svg
        className="hero-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
      >
        <path
          fill-opacity="1"
          d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,90.7C672,64,768,32,864,32C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
      <div className="bubble bubble-left gradient" />
      <div className="container">
        <div
          className="snack-player"
          data-snack-name="RNE Demo"
          data-snack-code={demoCode}
          data-snack-dependencies="react-native-elements"
        />
      </div>
    </>
  );
};

export default Home;

const demoCode = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

const uri ='https://rne.gallerycdn.vsassets.io/extensions/rne/snippets/1.2.1/1622009552732/Microsoft.VisualStudio.Services.Icons.Default';

const App = () => (
  <View style={styles.box}>
    <Image
      source={{
        uri,
      }}
      style={styles.image}
    />
    <Text h4 style={styles.text}>
      Cross Platform React Native UI Toolkit
    </Text>
    <Button title="Getting Started" />
  </View>
);

export default App;

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 20,
  },
  image: { width: 200, height: 200 },
  text: { textAlign: 'center', fontWeight: 'bold' },
});
`;
