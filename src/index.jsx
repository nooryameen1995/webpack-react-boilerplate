import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App.jsx';
import BirdStore from './stores/MainStore';

const Root = (
  <Provider BirdStore={BirdStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('app'));
