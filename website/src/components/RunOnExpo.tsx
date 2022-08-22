import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SectionHeader } from './SectionHeader';
import { SiExpo, SiReact } from 'react-icons/si';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <section id="expo">
      <div className="container">
        <SectionHeader
          color="#5c5cbd"
          header="Expo demo"
          subheader="See in action, play a live demo published on Expo "
          icon={SiExpo}
        />
      </div>
      <div className="container text--center  ">
        <div className="row margin-horiz--lg">
          <div className="col col--4">
            <img
              src="/img/website/app-preview3.png"
              style={{ width: 200, left: 60, top: -100 }}
            />
          </div>
          <div className="col col--8 " style={{ alignSelf: 'center' }}>
            <div className="padding-vert--lg">
              <h1>Check our Expo demo</h1>
              <div className="padding-vert--lg hide-on-small">
                <SiReact style={{ fontSize: 128, opacity: 0.1 }} />
                <img
                  src="/img/website/expo-go-qr.svg"
                  width={120}
                  className="margin-horiz--lg"
                />
                <SiExpo style={{ fontSize: 128, opacity: 0.1 }} />
              </div>
              <div>
                <Link
                  className={
                    'button button--secondary button--outline button--sm  margin-horiz--sm margin-vert--sm'
                  }
                  to={'https://expo.dev/@rne_org/react-native-elements'}
                >
                  Run on Expo Go
                </Link>
                <Link
                  className={
                    'button button--secondary button--sm margin-horiz--sm margin-vert--sm'
                  }
                  to={
                    'https://github.com/react-native-elements/react-native-elements/tree/next/example'
                  }
                >
                  View on Github
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
