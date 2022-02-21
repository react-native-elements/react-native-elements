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
          header="Expo demo"
          subheader="See React Native Elements in action, play a live demo published on Expo "
          icon={SiExpo}
        />
      </div>
      <div className="container ">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--3 col--offset-1 text--center">
            <img src="/img/website/app-preview3.png" width={'60%'} />
          </div>
          <div className="col col--8 text--center">
            <h1 className="hero__title gradient clip-text">Try now</h1>
            <p className="p--desc">
              To see React Native Elements in action, play a live demo published
              on Expo Go or run it by cloning the GitHub repo.
            </p>
            <Link
              className={
                'button button--secondary button--outline button--lg heroButton margin-horiz--sm margin-vert--sm'
              }
              to={'https://expo.io/@flyingcircle/react-native-elements-app'}
            >
              Run on Expo Go
            </Link>
            <Link
              className={
                'button button--secondary button--lg heroButton margin-horiz--sm margin-vert--sm'
              }
              to={
                'https://github.com/react-native-elements/react-native-elements-app'
              }
            >
              View on Github
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
