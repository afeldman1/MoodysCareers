import React, { PropTypes } from 'react';
import css from './Tab.css';

export default class Tab extends React.Component {
  static propTypes = {
    h1: PropTypes.string,
    p: PropTypes.string
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }
//className={css.social-links}
  render() {
    return (
      <li className={css.tabs}>
        <div>
          <div >
            {this.props.h1 ? this.props.h1 : ""}
          </div>
          <div className={css.paragraph}>
            <h1>{this.props.h1 ? this.props.h1 : ""}</h1>
            <p>{this.props.p ? this.props.p : ""}</p>
          </div>
        </div>
      </li>
    );
  }
}

