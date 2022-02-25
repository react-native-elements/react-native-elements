import React from 'react';
import '../../static/css/components.css';
import Highlight, { defaultProps } from 'prism-react-renderer';
const exampleCode = `import React from 'react';
import { Button } from '@react-native-elements/base';

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
                  <Highlight
                    {...defaultProps}
                    code={
                      'npm install @react-native-elements/base @react-native-elements/themed'
                    }
                    language="bash"
                    theme={
                      require('prism-react-renderer/themes/dracula').default
                    }
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => (
                      <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                          <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                              <span {...getTokenProps({ token, key })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </p>

                <b>2. Import the component and use it in your project</b>
                <p className="margin-vert--md margin-horiz--md">
                  <Highlight
                    {...defaultProps}
                    code={exampleCode}
                    language="tsx"
                    theme={
                      require('prism-react-renderer/themes/dracula').default
                    }
                  >
                    {({
                      className,
                      style,
                      tokens,
                      getLineProps,
                      getTokenProps,
                    }) => (
                      <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                          <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                              <span {...getTokenProps({ token, key })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
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
