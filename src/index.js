import React from 'react';
import ReactDOM from 'react-dom';
import './css/animate.css';
import './css/bootstrap-datepicker.css';
import './css/bootstrap.css';
import './css/flexslider.css';
import './css/icomoon.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css'
import  './css/owl.theme.default.min.css';
import './css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
