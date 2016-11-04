import React, { PropTypes } from 'react';
import css from './Accordion.css';

export default class Accordion extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
        <div className="container">
          <ul className="accordion">
            <li className="tabs">
              <div className="social-links">
              </div>
              <div className="paragraph">
                <h1>ECCA</h1>
                <p>Learn about ECCA.</p>
              </div>
            </li>
            <li className="tabs">
              <div className="social-links">
              </div>
              <div className="paragraph">
                <h1>ERS</h1>
                <p></p>
              </div>
            </li>
            <li className="tabs">
              <div className="social-links twitter-icon">
              </div>
              <div className="paragraph">
                <h1>SAV</h1>
              </div>
            </li>
            <li className="tabs">
              <div className="social-link">
              </div>
              <div className="paragraph">
                <h1></h1>
                <p></p>
              </div>
            </li>
            <li className="tabs">
              <div className="social-links">
              </div>
              <div className="paragraph">
                <h1>THE ROTATIONAL PROGRAM</h1>
                <p>EXCELLENT OPPORTUNITY TO LEARN LOTS</p>
              </div>
            </li>
          </ul>
      </div>
    );
  }
}

