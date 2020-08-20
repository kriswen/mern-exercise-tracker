import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; //we are not creating custom css
import App from './App'; //where we create our frontend react app

//import * as serviceWorker from './serviceWorker'; //we are not using this


//main thing render our app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //put it here 'root' element
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
