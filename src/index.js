import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.jpg';
import usr from './download.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div id="nav" class="layout">
    <div class="headicon" id="logo">
      <img src={logo} alt="logo" style={{width:"15rem",height:"4rem"}} />
    </div>
 
    <div class="headicon" id="user">
      <input id="cnt" type="button" value="30.00"></input>
      <img id="userid" src={usr} alt="upics" />
      <h5>Username</h5>
    </div>
    
  </div>
 <App />
 {/* <div id="footer" class="layout">

 </div> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
