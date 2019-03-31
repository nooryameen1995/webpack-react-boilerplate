import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App.jsx';
import MainStore from './store/mainStore';

const root = (
  <Provider MainStore={MainStore}>
    <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('app'));
