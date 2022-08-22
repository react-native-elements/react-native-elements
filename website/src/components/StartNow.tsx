import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <section id="start-now" className="container margin-vert--lg hide-on-small">
      <div className="row">
        <div className=" col--offset-3 col col--6 text--center">
          <h6 className="hero__title gradient clip-text">Start using now</h6>
          <div
            style={{
              position: 'relative',
              width: '600px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <div style={{ position: 'absolute', top: 40, left: 10 }}>
              <CodeBlock language="bash">{`expo init my-app --template @rneui/template`}</CodeBlock>
            </div>
            <img src="/img/website/start_now.png" />
          </div>
          <Link
            className="button button--primary"
            style={{ color: 'white' }}
            to="/docs"
          >
            Documentation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
