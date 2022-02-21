import React from 'react';
import Link from '@docusaurus/Link';
import { sponsors } from '../../sponsors.config';

const OpenCollective: React.FC<{}> = () => (
  <div className="container">
    <div className="text--center">
      <h1 className="hero__title gradient clip-text ">Our Sponsors</h1>
      <h4 className="subtitle ">Built with passion, backed by the community</h4>
    </div>
    {sponsors.map(({ sponsorTitle: title, items, colSize = 2 }) =>
      !items.length ? null : (
        <div className="margin-vert--md">
          <h1 className="">{title}</h1>
          <div className="row">
            {items.map(({ title: userName, desc, link, img }, index) => (
              <Link
                href={link}
                key={index}
                className={
                  'card row margin--md padding-vert--md col col--' + colSize
                }
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
              >
                <div style={{ flex: 0.8 }}>
                  {img && (
                    <img
                      height={20 * colSize + 'px'}
                      src={img}
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  )}
                </div>
                <div style={{ flex: 2 }} className="card__body ">
                  {userName && <h5 className="">@{userName}</h5>}
                  <p className="p--">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )
    )}
  </div>
);

export default OpenCollective;
