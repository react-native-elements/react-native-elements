import React from 'react';
import Link from '@docusaurus/Link';
import { sponsors } from '../../sponsors.config';
import { SectionHeader } from './SectionHeader';
import { SiGithubsponsors } from 'react-icons/si';

export const OpenCollective: React.FC<{}> = () => (
  <div className="container">
    <div className="row" id="sponsor">
      <div className="col col--6">
        <div className="backers-section text--center">
          <h3>Backers</h3>
          <p className="p--desc">
            Support us with a monthly donation and help us continue our
            activities.
          </p>

          <a
            href="https://opencollective.com/react-native-elements#backers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://opencollective.com/react-native-elements/backers.svg?width=695" />
          </a>
        </div>
      </div>

      <div className="col col--6">
        <div className="backers-section text--center">
          <h3>Sponsors</h3>
          <p className="p--desc ">
            Become a sponsor and get your logo on our README on GitHub with a
            link to your site.
            <a href="https://opencollective.com/react-native-elements#sponsor">
              Become a sponsor
            </a>
          </p>

          <a
            href="https://opencollective.com/react-native-elements#sponsors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://opencollective.com/react-native-elements/sponsors.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const Sponsors: React.FC<{}> = () => (
  <section id="sponsor" className="container">
    <SectionHeader
      color="#EA4AAA"
      header="Sponsors"
      subheader="Built with passion, backed by the community"
      icon={SiGithubsponsors}
    />
    <OpenCollective />
    {/* {sponsors.map(({ sponsorTitle: title, items, colSize = 2 }) =>
      !items.length ? null : (
        <div className="container ">
          <h2 className=" margin-horiz--md">{title}</h2>
          <div className="row is-multiline  margin-horiz--md">
            {items.map(({ title: userName, desc, link, img }, index) => (
              <div key={index} className={`col col--${colSize}`}>
                <Link
                  className="card shadow--md"
                  href={link}
                  style={{ height: '100%' }}
                >
                  <div className="avatar card__body">
                    <img className="avatar__photo" src={img} />
                    <div className="avatar__intro">
                      <div className="avatar__name">{userName}</div>
                      <small className="avatar__subtitle">{desc}</small>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )
    )} */}
  </section>
);

export default Sponsors;
