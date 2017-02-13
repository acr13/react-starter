import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import appConnector from '../../selectors/app';
import logo from './logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <div className="app-menu">
              <Link key="home" to="/">Home</Link>
              {this.props.routes.map(route =>
                <Link key={route.name} to={route.url}>{route.name}</Link>
              )}
            </div>
          </div>
        </div>

        <div>{ this.props.children }</div>
      </div>
    );
  }
}

export default connect(appConnector, () => ({}))(App);
