import React from 'react';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl">
        <div className="container ">
          <div className="row" style={{ alignItems: 'center' }}>
            <div className="col col--5 text--center">
              <h1 className="hero__title gradient clip-text">
                How to get started?
              </h1>
            </div>
            <div className="col col--7 ">
              <p>
                <b>1. Install the React Native Elements package from the NPM</b>
                <p className="margin-vert--md margin-horiz--md">
                  <pre>$ npm install react-native-elements</pre>
                </p>

                <b>2. Import the component and use it in your project</b>
                <p className="margin-vert--md margin-horiz--md">
                  <pre>
                    {
                      "import React from 'react';\nimport { Button } from 'react-native-elements';\n\nconst AwesomeButton = () => (<Button title='Welcome'/>)"
                    }
                  </pre>
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
