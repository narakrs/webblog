import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Footer } from 'antd/lib/layout/layout';
import * as sibarAction from './../../actions/uiActions';
import * as Header from './header';
import './style.css';

const headerTypes = 'HeaderType3';
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
    const HeaderSl = Header[headerTypes];
    const HeaderSelect = <HeaderSl></HeaderSl>;
    console.log('se', HeaderSl);
    return (
      <div
        className="dadwide"
        style={{
          backgroundImage:
            'url(https://wall.vn/wp-content/uploads/2020/03/hinh-nen-dep-may-tinh-1.jpg)',
        }}
      >
        {HeaderSelect}
        {children}
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
