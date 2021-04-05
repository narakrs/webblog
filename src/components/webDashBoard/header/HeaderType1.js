import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style1.css';

const routeWeb = [
  { to: '/product', name: 'Sản phẩm', exact: true },
  { to: '/card', name: 'Giỏ hàng', exact: true },
  { to: '/promotion', name: 'Khuyến mãi', exact: true },
  { to: '/blog', name: 'Blog', exact: true },
  { to: '/contact', name: 'Liên hệ', exact: true },
];
class HeaderType1 extends Component {
  render() {
    return (
      <div className="headertype1">
        <div className="wide headertype1_layout">
          <img
            src="https://www.goldlineindustries.com.au/wp-content/uploads/2019/03/icon-logo.png"
            className="headertype1_layout_nav"
            style={{ height: 40 }}
            alt="logo"
          />
          <div className="nav_pc">
            {routeWeb.map(item => (
              <NavLink
                to={item.to}
                exact={item.exact}
                className="headertype1_layout_nav"
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex_grow"></div>
            <NavLink to="/login" exact className="headertype1_layout_nav">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

HeaderType1.propTypes = {};

export default HeaderType1;
