import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import styles from './styles';

class SideBar extends Component {
  render() {
    return <div />;
  }
}
const ConnectedStyle = withStyles(styles);
export default compose(ConnectedStyle)(SideBar);
