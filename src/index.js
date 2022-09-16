import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import logo from './tnlogo.png';

import Avatar from '@mui/material/Avatar';

import CountDownTimer from './timer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div id="nav" class="layout">
  
    <div class="headicon" id="logo">

    
      <img src={logo} alt="logo" style={{width:"15rem",height:"3rem"}} />
      

    </div>
    <h3 id="heading">Tamil Nadu - Online Single Window Portal</h3>
    <div class="headicon" id="user">
    
      <CountDownTimer />
    
      {/* <h5>session timeout: 30: 00 mins</h5> */}
      
         <Avatar alt="USER" src="./download.jpg" id="avr" />
      
      <p>Username</p>
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
