import React from 'react';
import Link from '@docusaurus/Link';
import { sponsors } from '../../sponsors.config';
import { SectionHeader } from './SectionHeader';
import { SiGithubsponsors } from 'react-icons/si';

const OpenCollective: React.FC<{}> = () => (
  <section className="">
    <div className="container">
      <SectionHeader
        color="#EA4AAA"
        header="Our Sponsors"
        subheader="Built with passion, backed by the community"
        icon={SiGithubsponsors}
      />
    </div>
    <div className="container">
      {sponsors.map(({ sponsorTitle: title, items, colSize = 2 }) =>
        !items.length ? null : (
          <div className="container">
            <h3 className="">{title}</h3>
            <div className="row is-multiline">
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
      )}
    </div>
  </section>
);

export default OpenCollective;
