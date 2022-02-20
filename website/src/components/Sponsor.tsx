import React from 'react';
import Link from '@docusaurus/Link';
import { sponsors } from '../../sponsors.config';

const OpenCollective: React.FC<{}> = () => (
  <section className="margin-vert--xl">
    <div className="text--center">
      <h1 className="hero__title gradient clip-text ">Our Sponsors</h1>
      <h4 className="subtitle ">Built with passion, backed by the community</h4>
    </div>
    {sponsors.map(({ sponsorTitle: title, items, colSize = 2 }) =>
      !items.length ? null : (
        <div className="container margin-vert--md">
          <h1 className="">{title}</h1>
          <div className="row">
            {items.map(({ title: userName, desc, link, img }, index) => (
              <Link
                href={link}
                key={index}
                className={'card margin--md col col--' + colSize}
              >
                <div className="card__header">
                  <div className="avatar">
                    <img className="avatar__photo" src={img} />
                    <div className="avatar__intro">
                      <div className="avatar__name">{userName}</div>
                      <small className="avatar__subtitle">{desc}</small>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )
    )}
  </section>
);

export default OpenCollective;
