import React, { Component, PropTypes } from 'react';
import look, { StyleSheet } from 'react-look';

import tinycolor from 'tinycolor2';
import theme from 'universal/styles/theme';

let styles = {};

@look
// eslint-disable-next-line react/prefer-stateless-function
export default class SetupHeader extends Component {
  static propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
  }

  render() {
    const { heading, subHeading } = this.props;

    return (
      <div className={styles.setupHeader}>
        <h1 className={styles.setupHeading}>
          {heading}
        </h1>
        <h2 className={styles.setupSubHeading}>
          {subHeading}
        </h2>
      </div>
    );
  }
}

styles = StyleSheet.create({
  setupHeader: {
    // Define container
  },

  setupHeading: {
    color: theme.palette.b,
    fontFamily: theme.typography.actionUISerif,
    fontSize: theme.typography.fs7,
    margin: '2rem 0 1rem'
  },

  setupSubHeading: {
    // TODO: use tinycolor mix()
    color: '#08080a',
    fontSize: theme.typography.fs6,
    margin: '0 0 2rem',
  }
});
