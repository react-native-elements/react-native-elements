import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { SectionHeader } from './SectionHeader';
import { SiVisualstudiocode } from 'react-icons/si';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl">
        <div className="container">
          <SectionHeader
            color="#007ACC"
            header="VS Code Extension"
            subheader="Auto-complete snippets extension with component preview & auto import."
            icon={SiVisualstudiocode}
          />
        </div>
        <div className="container ">
          <div className="col col--12 text--center">
            <Link
              className={
                'button button--primary button--outline button--lg heroButton  margin-horiz--sm margin-vert--sm'
              }
              to={
                'https://marketplace.visualstudio.com/items?itemName=rne.snippets'
              }
            >
              Install from marketplace
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
