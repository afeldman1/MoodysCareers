import React, { PropTypes } from 'react';
import css from './Accordion.css';
import Tab from './Tab';

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
              <Tab h1="CONTENT" p="Learn about CONTENT."/>
              <Tab h1="SAV" p="Learn about SAV."/>
              <Tab h1="ECCA" p="Learn about ECCA."/>
              <Tab h1="THE ROTATIONAL PROGRAM" p="EXCELLENT OPPORTUNITY TO LEARN LOTS."/>
          </ul>
      </div>
    );
  }
}

