import React from 'react';
import '../../static/css/components.css';
import Link from '@docusaurus/Link';

// const A = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
const C = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Atom</title>
    <path d="M20.489 9.025c-2.183-.93-5.116-1.53-8.25-1.695-.5-.03-.987-.04-1.45-.04 2.318-2.83 4.802-4.73 6.437-4.79.322-.013.595.055.813.196.706.458.905 1.768.545 3.59-.04.25.12.493.36.54.25.05.49-.11.54-.36.45-2.28.12-3.846-.94-4.538-.38-.248-.84-.365-1.35-.346-2.05.077-4.94 2.3-7.59 5.72-1.154.035-2.24.13-3.232.287-.646-2.897-.39-4.977.594-5.477.138-.073.285-.11.457-.124.697-.054 1.66.395 2.71 1.27.194.16.486.14.646-.06a.458.458 0 00-.06-.645C9.459 1.51 8.297 1 7.347 1.07a2.244 2.244 0 00-.803.22c-1.19.607-1.67 2.327-1.37 4.838.07.52.16 1.062.29 1.62-3.281.656-5.371 1.97-5.461 3.624-.06 1.17.865 2.284 2.68 3.222a.46.46 0 10.42-.816C1.653 13.031.873 12.19.92 11.42c.05-1.08 1.772-2.19 4.76-2.78.27.994.62 2.032 1.05 3.09-1.018 1.888-1.756 3.747-2.137 5.4-.56 2.465-.26 4.22.86 4.948.36.234.78.35 1.247.35.935 0 2.067-.46 3.347-1.372a.458.458 0 10-.53-.746c-1.544 1.103-2.844 1.472-3.562 1.003-.76-.495-.926-1.943-.46-3.976.32-1.386.907-2.93 1.708-4.52.2.438.41.876.63 1.313 1.425 2.796 3.17 5.227 4.91 6.845 1.386 1.29 2.674 1.963 3.735 1.963.35 0 .68-.075.976-.223 1.145-.585 1.64-2.21 1.398-4.575-.224-2.213-1.06-4.91-2.354-7.6a.46.46 0 00-.83.396c2.69 5.602 2.88 10.19 1.37 10.96-1.59.813-5.424-2.355-8.39-8.18-.34-.655-.637-1.3-.9-1.93.34-.608.7-1.22 1.095-1.83.395-.604.806-1.188 1.224-1.745h.394c.54 0 1.126.01 1.734.048 6.53.343 10.975 2.56 10.884 4.334-.04.765-.924 1.538-2.425 2.12a.464.464 0 00-.26.596.455.455 0 00.593.262c1.905-.74 2.95-1.756 3.01-2.93.07-1.33-1.17-2.61-3.5-3.6v-.01zM8.073 9.45c-.27.415-.52.827-.764 1.244a23.66 23.66 0 01-.723-2.215c.713-.11 1.485-.19 2.31-.24-.28.39-.554.794-.82 1.21v-.01zm3.925 1.175a1.375 1.375 0 100 2.75 1.375 1.375 0 100-2.75z" />
  </svg>
);

const B = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Apache RocketMQ</title>
    <path d="M11.438 23.467c-.517-.638-1.106-1.89-1.217-2.587l-.082-.511h1.835c1.435 0 1.835.036 1.835.165 0 .352-.412 1.553-.709 2.066-.333.577-1.021 1.41-1.155 1.4-.043-.004-.272-.244-.507-.533zm-4.532-4.193c-1.251-3.005-1.231-6.784.056-10.63.786-2.35 2.652-5.689 4.413-7.9L11.967 0l.422.493c.763.893 2.612 3.731 3.28 5.036 1.32 2.578 2.055 4.993 2.264 7.438.197 2.302-.176 4.837-.962 6.533l-.338.731-.727-.433-.727-.433H11.95c-2.466 0-3.287.039-3.476.166-.136.091-.453.29-.705.441l-.458.276-.405-.974zm9.338-1.79c.779-2.623.532-6.253-.635-9.344-.683-1.81-2.085-4.319-3.211-5.747-.357-.452-.387-.466-.609-.265-.441.398-1.854 2.622-2.544 4.002-1.927 3.856-2.484 7.995-1.521 11.308l.196.672h8.138l.186-.626zM3.311 19.835c.037-.155.108-.565.157-.909.079-.549.189-.729.885-1.443l.795-.815.002.507c.003.641.302 1.799.631 2.445l.254.498H4.64c-1.384-.001-1.396-.003-1.329-.283zm14.944-.376c.271-.613.529-1.616.606-2.352.031-.299.066-.282.762.379s.738.735.908 1.631c.098.516.179.952.179.97 0 .017-.618.031-1.373.031h-1.373l.291-.659zm-6.477-4.504a2.173 2.173 0 0 1-2.17-2.17c0-1.196.973-2.17 2.17-2.17s2.17.973 2.17 2.17-.973 2.17-2.17 2.17zm0-3.865c-.935 0-1.696.761-1.696 1.695s.761 1.696 1.696 1.696c.935 0 1.696-.761 1.696-1.696s-.761-1.695-1.696-1.695zM9.455 9.457a.657.657 0 1 1 0 1.314.657.657 0 0 1 0-1.314zm-.357 4.665a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm5.212-5.18a1.069 1.069 0 1 1 0 2.138 1.069 1.069 0 0 1 0-2.138zm0 5.75a1.418 1.418 0 1 1 0 2.836 1.418 1.418 0 0 1 0-2.836zM9.447 10.68l.491-.491.729.729-.491.491-.729-.729zm4.066-.336l.539.539-.729.729-.539-.539.729-.729zm-3.572 3.362l.491.491-.729.729-.491-.491.729-.729zm2.721 1.064l.61-.59.779.754-.61.59-.779-.754zm-1.717-2.167a.277.277 0 1 1 0 .554.277.277 0 0 1 0-.554zm.794 0a.277.277 0 1 1 0 .554.277.277 0 0 1 0-.554zm.794 0a.277.277 0 1 1 0 .554.277.277 0 0 1 0-.554z" />
  </svg>
);
const A = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.78 5.113C14.09 3.425 12.48 1.815 11.998 0c-.48 1.815-2.09 3.425-3.778 5.113-2.534 2.53-5.405 5.4-5.405 9.702a9.184 9.185 0 1018.368 0c0-4.303-2.871-7.171-5.405-9.702M6.72 16.954c-.563-.019-2.64-3.6 1.215-7.416l2.55 2.788a.218.218 0 01-.016.325c-.61.625-3.204 3.227-3.527 4.126-.066.186-.164.18-.222.177M12 21.677a3.158 3.158 0 01-3.158-3.159 3.291 3.291 0 01.787-2.087c.57-.696 2.37-2.655 2.37-2.655s1.774 1.988 2.367 2.649a3.09 3.09 0 01.792 2.093A3.158 3.158 0 0112 21.677m6.046-5.123c-.068.15-.223.398-.431.405-.371.014-.411-.177-.686-.583-.604-.892-5.864-6.39-6.848-7.455-.866-.935-.122-1.595.223-1.94C10.736 6.547 12 5.285 12 5.285s3.766 3.574 5.336 6.016c1.57 2.443 1.029 4.556.71 5.253" />
  </svg>
);

type FeatureTypes = {
  title: string;
  description: string;
  img?: ({ ...props }: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const features: FeatureTypes[] = [
  {
    title: 'Cross-Platform',
    description:
      'Consistent design across android, iOS, and web. 30+ components designed to save development time.',
    img: A,
  },
  {
    title: 'Easy to use',
    description:
      'Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ',
    img: B,
  },
  {
    title: 'Customizable',
    description: 'Easily style any of our components just the way you want.',
    img: C,
  },
  {
    title: 'Community-Driven',
    description:
      "100% built by the community. We're here because we love open source.",
    img: C,
  },
];

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl" id="why">
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
            {features.map(({ title, description, img: Img }, index) => (
              <div
                key={index}
                className="col col--3 "
                style={{
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <div className="card">
                  <div className="card__body  margin-vert--sm">
                    <b className=" gradient clip-text">
                      <span
                        style={{
                          backgroundColor: 'var(--ifm-color-primary-lighter)',
                          borderRadius: '6px',
                          padding: '4px 6px',
                          marginRight: 8,
                        }}
                      >
                        <Img
                          style={{
                            width: 16,
                            fill: 'var(--ifm-color-primary)',
                          }}
                        />
                      </span>
                      {title}
                    </b>
                    <p
                      className="p--desc margin-top--md"
                      style={{ lineHeight: 1.4, fontSize: '0.8rem' }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
