import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { SectionHeader } from '../components/SectionHeader';
import { BsPeople } from 'react-icons/bs';
import { FaSun, FaEye } from 'react-icons/fa';

type MemberType = { name: string; gh: string; title: string; twitter?: string };

const TeamSection = ({ members }: { members: MemberType[] }) => (
  <div className="row margin-horiz--lg margin-vert--sm">
    {members.map(({ name, gh, twitter }, index) => (
      <div
        key={index}
        className="avatar avatar--verticaal col col--3 padding--md"
      >
        <img
          className="avatar__photo avatar__photo--ljg"
          src={`https://github.com/${gh}.png`}
        />
        <div className="avatar__intro">
          <div className="avatar__name">{name}</div>
          <div className="avatar__subtitle">
            <Link to={`https://github.com/${gh}`}>
              <SiGithub color="var(--ifm-color-emphasis-900)" />
            </Link>{' '}
            {twitter && (
              <Link to={`https://twitter.com/${twitter}`}>
                <SiTwitter />
              </Link>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Home: React.FunctionComponent<{}> = () => {
  return (
    <Layout title={'The Team'}>
      <section className="container ">
        <h1 className="text--center text--primary margin-vert--md">Our Team</h1>
        <div className="margin-vert--lg">
          <SectionHeader
            noMargin
            color="#EA4AAA"
            header="Core Team"
            icon={FaEye}
          />
          <TeamSection members={active} />
        </div>
        <div className="margin-vert--lg">
          <SectionHeader
            noMargin
            color="#20b19e"
            header="Community emeriti"
            icon={BsPeople}
          />
          <TeamSection members={core} />
        </div>
        <div className="margin-vert--lg">
          <SectionHeader
            noMargin
            color="#fbbd00"
            header="GSoC'21 Students"
            icon={FaSun}
          />
          <TeamSection members={gsoc} />
        </div>
      </section>
    </Layout>
  );
};

export default Home;

const active: MemberType[] = [
  {
    gh: 'flyingcircle',
    name: 'Jeremy Hamilton',
    title: '',
    twitter: null,
  },

  {
    gh: 'pranshuchittora',
    name: 'Pranshu Chittora',
    title: '',
    twitter: 'pranshuchittora',
  },
  {
    name: 'Arpit Bhalla',
    gh: 'arpitbhalla',
    title: "GSoC'21 student",
    twitter: 'arpitbhalla_',
  },
];
const core: MemberType[] = [
  { gh: 'dabit3', name: 'Nader Dabit', title: '', twitter: 'dabit3' },
  {
    gh: 'Monte9',
    name: 'Monte Thakkar',
    title: '',
    twitter: 'mthakkar_',
  },
  {
    gh: 'iRoachie',
    name: 'Kyle Roach',
    title: '',
    twitter: 'roach_iam',
  },
  {
    gh: 'martinezguillaume',
    name: 'Guillaume Martinez',
    title: '',
    twitter: null,
  },
  {
    gh: 'xavier-villelegier',
    name: 'Xavier Villelégier',
    title: '',
    twitter: null,
  },
];
const gsoc: MemberType[] = [
  {
    name: 'Arpit Bhalla',
    gh: 'arpitbhalla',
    title: "GSoC'21 student",
    twitter: 'arpitbhalla_',
  },
  {
    gh: 'khushal87',
    name: 'Khushal Agarwal',
    title: "GSoC'21 student",
    twitter: 'khushal87',
  },
];
