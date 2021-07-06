import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl">
        <div className="container ">
          <div
            className="row"
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <div className="col col--12 text--center">
              <h1 className="hero__title gradient clip-text">
                <img src="/img/website/vscode.svg" width={'40rem'} /> VS Code
                Extension
              </h1>
              <p className="p--desc">
                Auto-complete snippets extension with component preview & auto
                import.
              </p>
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
        </div>
      </section>
    </>
  );
};

export default Home;
