import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';

class HomePage extends Component {
  render() {
    return (
      <div className="wide">
        <div className="flex_center">
          <div className="bglogo"></div>
        </div>
        <div className="bgNew"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {};

HomePage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
