import React from 'react';
import Layout from '@theme/Layout';
import OpenCollective from '../components/OpenCollective';
import Sponsor from '../components/Sponsor';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <Layout title={'Sponsors'}>
      <div className="margin-vert--lg">
        <Sponsor />
        <OpenCollective />
      </div>
    </Layout>
  );
};

export default Home;
