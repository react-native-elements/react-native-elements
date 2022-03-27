import React from 'react';
import '../../static/css/components.css';
import Highlight, { defaultProps } from 'prism-react-renderer';
import CodeBlock from '@theme/CodeBlock';

const exampleCode = `import React from 'react';
import { Button } from '@rneui/base';

const AwesomeButton = () => (<Button title='Welcome'/>)`;

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl">
        <div className="container ">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col col--5 text--center">
              <h6 className="hero__title gradient clip-text">
                How to get started?
              </h6>
            </div>
            <div className="col col--7 ">
              <p>
                <b>1. Install the React Native Elements package from the NPM</b>
                <p className="margin-vert--md margin-horiz--md">
                  <CodeBlock language="bash">
                    npm install @rneui/base @rneui/themed
                  </CodeBlock>
                </p>

                <b>2. Import the component and use it in your project</b>
                <p className="margin-vert--md margin-horiz--md">
                  <CodeBlock language="tsx">{exampleCode}</CodeBlock>
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
