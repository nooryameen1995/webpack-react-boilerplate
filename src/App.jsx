import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { inject, observer, PropTypes } from 'mobx-react';

@inject('MainStore')
@observer
class App extends Component {
  render() {
    const { MainStore } = this.props;
    const data = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Auth-Token': MainStore.token,
        'X-CSRFToken': MainStore.token,
      },
    };
    return (
      <div>
        <h2>toke:{MainStore.token}</h2>
        {MainStore.fetchAlarms(data)}
      </div>
    );
  }
}
App.propTypes = {
  MainStore: PropTypes.observableArray,
};
export default hot(module)(App);
