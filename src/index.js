import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { store } from "./redux/root.reducer"


const Root = ({ storex }) => (
  <React.StrictMode>
    <Provider store={storex}>
      <App/>
    </Provider>
  </React.StrictMode>
);

Root.propTypes = {
  storex: PropTypes.object.isRequired,
};

ReactDOM.render(
  <Root storex={store} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
