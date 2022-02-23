import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SectionHeader } from './SectionHeader';
import {
  SiVisualstudiocode,
  SiSlack,
  SiTwitter,
  SiGithub,
} from 'react-icons/si';
import { MdOutlinePeopleAlt } from 'react-icons/md';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl" id="community">
        <div className="container">
          <SectionHeader
            color="#00A98F"
            header="Community"
            subheader="We are a community of developers who love React Native."
            icon={MdOutlinePeopleAlt}
          />
        </div>
        <div className="container">
          <div className="row margin-horiz--lg is-multiline">
            <div className="col col--6">
              <Link
                style={{
                  height: '100%',
                  backgroundColor: '#1DA1F2',
                  color: 'white',
                }}
                href="https://twitter.com/rne_org"
                className="card shadow--md"
              >
                <div className="card__body padding--lg">
                  <h3 className="margin-bottom--sm ">
                    <SiTwitter fill="#fff" />
                  </h3>
                  <h4>Stay up to date </h4>
                  <b>Follow us on Twitter to get the latest updates.</b>
                </div>
              </Link>
            </div>
            <div className="col col--6">
              <Link
                style={{ backgroundColor: '#4A154B', color: 'white' }}
                href="https://react-native-elements-slack.herokuapp.com/"
                className="card shadow--md"
              >
                <div className="card__body padding--lg">
                  <h3 className="margin-bottom--sm ">
                    <img src="/img/website/slack.png" width={24} />
                  </h3>
                  <h4>Any question?</h4>
                  <b>
                    Have any other question? or like to say Hi! to the RNE
                    community,
                  </b>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
