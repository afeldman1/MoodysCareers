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
          <ul className={css.accordion}>
            <li className={css.tabs}>
              <div className={css.sociallinks}>
              </div>
              <div className={css.paragraph}>
              </div>
            </li>
            <li className={css.tabs}>
              <div className={css.sociallinks}>
              </div>
              <div className={css.paragraph}>
              </div>
            </li>
            <li className={css.tabs}>
              <div className={css.sociallinks}></div>
              <div className={css.paragraph}>
              </div>
            </li>
            <li className={css.tabs}>
              <div className={css.sociallinks}>
              </div>
              <div className={css.paragraph}>
              </div>
            </li>
            <li className={css.tabs}>
              <div className={css.sociallinks}>
              </div>
              <div className={css.paragraph}>
              </div>
            </li>
          </ul>
      </div>
    );
  }
}

