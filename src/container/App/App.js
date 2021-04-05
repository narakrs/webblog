import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import { HashRouter, Switch } from 'react-router-dom';
import styles from './styles';
import { ADMIN_ROUTES, AUTHENTYCATION_ROUTES } from './../routes';
import AdminLayoutRoute from './../routes/AdminLayoutRoute';
import AdminWebRoute from './../routes/AdminWebRoute';
import './../../commons/gridShowCss/style.css';
import 'antd/dist/antd.css';

class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return (
        <AdminLayoutRoute
          path={route.path}
          key={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    });
    console.log(xhtml);
    return xhtml;
  };

  renderWebRoutes = () => {
    let xhtml = null;
    xhtml = AUTHENTYCATION_ROUTES.map(route => {
      return (
        <AdminWebRoute
          path={route.path}
          key={route.path}
          component={route.component}
          name={route.name}
          exact={route.exact}
        />
      );
    });
    console.log(xhtml);
    return xhtml;
  };

  render() {
    return (
      <HashRouter>
        <Switch>
          {this.renderAdminRoutes()}
          {this.renderWebRoutes()}
        </Switch>
      </HashRouter>
    );
  }
}
App.propTypes = {};
const mapStateToProps = state => {
  return { login: state.login };
};

const mapDispatchToProps = dispatch => {
  return {};
};
const witchStyles = withStyles(styles);
const witchConect = connect(mapStateToProps, mapDispatchToProps);
export default compose(witchStyles, witchConect)(App);
