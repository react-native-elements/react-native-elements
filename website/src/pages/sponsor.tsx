import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import OpenCollective from '../components/OpenCollective';
import Sponsor from '../components/Sponsor';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div className="margin-vert--lg">
        <Sponsor />
        <OpenCollective />
      </div>
    </Layout>
  );
};

export default Home;
