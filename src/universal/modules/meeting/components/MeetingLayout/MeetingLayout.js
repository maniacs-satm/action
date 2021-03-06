import React, {PropTypes} from 'react';
import look, {StyleSheet} from 'react-look';

let styles = {};

const MeetingLayout = (props) =>
  <div className={styles.root}>
    {props.children}
  </div>;

MeetingLayout.propTypes = {
  children: PropTypes.any
};

styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    display: 'flex !important',
    minHeight: '100vh'
  }
});

export default look(MeetingLayout);
