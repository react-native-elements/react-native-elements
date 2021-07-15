import React from 'react';
import '../../static/css/components.css';

type FeatureTypes = {
  title: string;
  description: string;
  img: string;
};

const features: FeatureTypes[] = [
  {
    title: 'Cross-Platform',
    description:
      'Consistent design across android, iOS, and web. 30+ components designed to save development time.',
    img: '/img/website/tweak.svg',
  },
  {
    title: 'Easy to use',
    description:
      'Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ',
    img: '/img/website/explore.svg',
  },
  {
    title: 'Customizable',
    description: 'Easily style any of our components just the way you want.',
    img: '/img/website/design.svg',
  },
  {
    title: 'Community-Driven',
    description:
      "100% built by the community. We're here because we love open source.",
    img: '/img/website/bootstrap.svg',
  },
];

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <section className="margin-vert--xl">
        <div className="container ">
          <h1 className="hero__title gradient clip-text text--center">
            Why React Native Elements?
          </h1>
          <div className="row">
            <div className="col col--10 col--offset-1">
              <p className="p--desc margin-vert--md text--center">
                React Native Elements is an implementation of the Material
                Design System. The framework contains a set of general-purpose
                UI components styled in a similar way. The most awesome thing
                about is that the themes can be changed in the runtime without
                reloading the application. This way, you may easily focus on
                business logic, while we take care of the visual appearance of
                your product.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {features.map(({ title, description, img }, index) => (
              <div
                key={index}
                className="col col--3 "
                style={{
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <div
                  style={{ justifyContent: 'stretch' }}
                  className="card margin-vert--lg text--center shadow--sm"
                >
                  <div className="card__image padding-horiz--lg  margin-vert--lg ">
                    <img
                      height={'220px'}
                      src={img}
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div className="card__body">
                    <h3 className=" gradient clip-text">{title}</h3>
                    <p className="p--desc">{description}</p>
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
