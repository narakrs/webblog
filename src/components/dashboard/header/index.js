import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';
import { ADMIN_ROUTES } from './../../../container/routes/index';

class HeaderComponent extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#2e94da' }}>
        <div className="wide header">
          {/* <img
            src="https://lh3.googleusercontent.com/proxy/0FMU9CWVywxtItLv3uK68hXMp35CTblWW7LVdZVuspag1aOfN89lzB3kXIAImOijyN0e4JvrZKff-7ZrCuqCHB_M2dFOhKB-MiRj_i7hWF6tSy6T"
            alt="logo"
            style={{ width: 50, height: 50 }}
          /> */}
          {ADMIN_ROUTES.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              exact={item.exact}
              className="nav_link"
              activeClassName="selected"
            >
              <span
                className={item.icon}
                style={{ marginRight: 5, fontSize: 12 }}
              />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

HeaderComponent.propTypes = {};

export default HeaderComponent;
