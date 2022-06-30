import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './redux'

import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
    )}>
      <App />
    </Provider>
  </React.StrictMode>
);
