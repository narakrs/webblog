import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Footer } from 'antd/lib/layout/layout';
import Header from './header';
import * as sibarAction from './../../actions/uiActions';

class DashBoard extends Component {
  state = { openSidebar: false };

  setOpenSideBar = value => {
    const { onSetOpenSideBar } = this.props;
    console.log(onSetOpenSideBar, value);
    const { showSideBar, hideSideBar } = onSetOpenSideBar;
    if (value) showSideBar();
    else hideSideBar();
  };

  render() {
    const { children } = this.props;
    return (
      <div className="dadwide">
        <div style={{ height: 30, backgroundColor: 'white' }}></div>
        <Header />
        {children}
        <Footer style={{ textAlign: 'center' }}>
          Quản lý thiết kế web @2020
        </Footer>
      </div>
    );
  }
}

DashBoard.propTypes = {
  children: PropTypes.object,
  onSetOpenSideBar: PropTypes.shape({
    showSideBar: PropTypes.func,
    hideSideBar: PropTypes.func,
  }),
};
const mapStateToProps = state => {
  const { showsidebar } = state.ui;
  return {
    openSidebar: showsidebar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetOpenSideBar: bindActionCreators(sibarAction, dispatch),
  };
};
const ConnectRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(ConnectRedux)(DashBoard);
