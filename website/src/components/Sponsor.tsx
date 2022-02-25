import React from 'react';
import Link from '@docusaurus/Link';
import { sponsors } from '../../sponsors.config';
import { SectionHeader } from './SectionHeader';
import { SiGithubsponsors } from 'react-icons/si';

const OpenCollective: React.FC<{}> = () => (
  <section id="sponsor" className="container">
    <SectionHeader
      color="#EA4AAA"
      header="Sponsors"
      subheader="Built with passion, backed by the community"
      icon={SiGithubsponsors}
    />
    {sponsors.map(({ sponsorTitle: title, items, colSize = 2 }) =>
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
    )}
  </section>
);

export default OpenCollective;
