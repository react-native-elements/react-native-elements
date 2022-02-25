import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SectionHeader } from './SectionHeader';
import { SiExpo } from 'react-icons/si';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <section className="margin-vert--xl" id="expo">
      <div className="container">
        <SectionHeader
          color="#5c5cbd"
          header="Expo demo"
          subheader="See in action, play a live demo published on Expo "
          icon={SiExpo}
        />
      </div>
      <div className="container text--center" style={{ position: 'relative' }}>
        <img
          src="/img/website/Expo Go.png"
          style={{ borderRadius: 12, pointerEvents: 'none' }}
        />
        <div>
          <Link
            className={
              'button button--secondary button--outline button--sm  margin-horiz--sm margin-vert--sm'
            }
            to={'https://expo.io/@flyingcircle/react-native-elements-app'}
          >
            Run on Expo Go
          </Link>
          <Link
            className={
              'button button--secondary button--sm margin-horiz--sm margin-vert--sm'
            }
            to={
              'https://github.com/react-native-elements/react-native-elements-app'
            }
          >
            View on Github
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
