import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style2.css';

const routeWeb = [
  { to: '/product', name: 'Sản phẩm', exact: true },
  { to: '/card', name: 'Giỏ hàng', exact: true },
  { to: '/promotion', name: 'Khuyến mãi', exact: true },
  { to: '/blog', name: 'Blog', exact: true },
  { to: '/contact', name: 'Liên hệ', exact: true },
];
class HeaderType2 extends Component {
  render() {
    return (
      <div className="headertype2">
        <div className="wide headertype2_layout">
          <img
            src="https://www.goldlineindustries.com.au/wp-content/uploads/2019/03/icon-logo.png"
            style={{ height: 40 }}
            alt="logo"
          />
          <div className="nav_pc">
            {routeWeb.map(item => (
              <NavLink
                to={item.to}
                exact={item.exact}
                className="headertype2_layout_nav"
              >
                {item.name.toUpperCase()}
              </NavLink>
            ))}
            <div className="flex_grow"></div>
            <NavLink to="/login" exact className="headertype2_layout_nav">
              LOGIN
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

HeaderType2.propTypes = {};

export default HeaderType2;
