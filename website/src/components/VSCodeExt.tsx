import React from 'react';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';
import { MdOutlineDevices } from 'react-icons/md';
import { IconType } from 'react-icons';

const Home: React.FunctionComponent<{ color?: string; Icon: IconType }> = ({
  color = '#00b85c',
  Icon = MdOutlineDevices,
}) => {
  return (
    <>
      <section className="margin-vert--xl">
        <div className="container ">
          <div className="row">
            <h2 className="gradient clip-text">
              <span
                style={{
                  backgroundColor: color + '33',
                  borderRadius: '6px',
                  padding: '8px 12px 4px 12px',
                  marginRight: 8,
                }}
              >
                <Icon
                  style={{
                    width: 18,
                    fill: color,
                  }}
                />
              </span>
              hua hua
            </h2>
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
