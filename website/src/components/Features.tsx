import React from 'react';
import '../../static/css/components.css';
import Link from '@docusaurus/Link';
import {
  MdOutlineDevices,
  MdCode,
  MdEdit,
  MdAccessibleForward,
  MdPeopleOutline,
} from 'react-icons/md';
import { IconTag } from './IconTag';

type FeatureTypes = {
  title: string;
  description: string;
  img?: ({ ...props }: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
};

const features: FeatureTypes[] = [
  {
    title: 'Cross-Platform',
    description:
      'Consistent design across android, iOS, and web. 30+ components designed to save development time.',
    img: MdOutlineDevices,
    color: '#894cff',
  },
  {
    title: 'Easy to use',
    description:
      'Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ',
    img: MdCode,
    color: '#ff5381',
  },
  {
    title: 'Customizable',
    description: 'Easily style any of our components just the way you want.',
    img: MdEdit,
    color: '#00b85c',
  },
  {
    title: 'Community-Driven',
    description:
      "100% built by the community. We're here because we love open source.",
    img: MdPeopleOutline,
    color: '#328aff',
  },
];

const Home: React.FunctionComponent<{}> = () => {
  return (
    <section className="" id="why">
      <div className="container text--center">
        <h1 className="hero__title gradient clip-text">
          Why React Native Elements?
        </h1>
        {/* <div>
            <Link
              className={'margin-horiz--md margin-vert--sm heroButton'}
              to={
                'https://github.com/react-native-elements/react-native-elements/stargazers'
              }
            >
              <img
                alt="GitHub Repo stars"
                src="https://img.shields.io/github/stars/react-native-elements/react-native-elements?color=white&label=Github%20Stars&logo=github&style=for-the-badge"
              />
            </Link>
            <Link
              className={'margin-horiz--md margin-vert--sm heroButton'}
              to={
                'https://github.com/react-native-elements/react-native-elements/stargazers'
              }
            >
              <img
                alt="npm"
                src="https://img.shields.io/npm/dm/react-native-elements?color=white&label=installs&logo=npm&style=for-the-badge"
              />
            </Link>
          </div> */}

        {/* <div className="row">
            <div className="col col--10 ">
              <p className="p--desc margin-vert--md">
                React Native Elements is an implementation of the Material
                Design System. The framework contains a set of general-purpose
                UI components styled in a similar way. The most awesome thing
                about is that the themes can be changed in the runtime without
                reloading the application. This way, you may easily focus on
                business logic, while we take care of the visual appearance of
                your product.
              </p>
            </div>
          </div> */}
      </div>
      <div className="container">
        <div className="row is-multiline">
          {features.map(({ title, description, img, color }, index) => (
            <div className="col col--3" key={index}>
              <Link className="card shadow--md" style={{ height: '100%' }}>
                <div className="card__body">
                  <h4 className="gradient clip-text inline-flex-center">
                    <IconTag
                      icon={img}
                      color={color}
                      style={{ marginRight: 8 }}
                    />
                    {title}
                  </h4>
                  <p
                    className="p--desc"
                    style={{ lineHeight: 1.4, fontSize: '0.8rem' }}
                  >
                    {description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
