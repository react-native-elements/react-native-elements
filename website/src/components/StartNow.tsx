import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { MdChevronRight } from 'react-icons/md';
import Link from '@docusaurus/Link';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <section id="start-now" className="container margin-vert--lg hide-on-small">
      <div className="row">
        <div className=" col--offset-4 col col--5 text--center">
          <h6 className="hero__title gradient clip-text">Get started</h6>
          <div>
            <CodeBlock language="bash">{`npx create-expo-app --template @rneui/template`}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
