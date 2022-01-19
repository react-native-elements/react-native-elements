import React from 'react';
import Link from '@docusaurus/Link';

const OpenCollective: React.FC<{}> = () => (
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

export default OpenCollective;
