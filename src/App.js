import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import ApplicantDetails from './Applicant';
import './App.css';
// import SiteAddress from './siteadd';
import Toptab from './toptab';
import Toptab2 from './toptab2';
// import Toptab3 from './toptab3';
// import Coverpage from './cover';

class App extends Component {
  render() {
    const toptab1 = () => {
      ReactDOM.render(<Toptab />,document.getElementById("right-top"));
       
  }
      
    const toptab2 = () => {
      ReactDOM.render(<Toptab2 />,document.getElementById("right-top"));
   }
  //  const toptab3 = () => {
  //     ReactDOM.render(<Toptab3 />,document.getElementById("display"));
  //  }

    return (
      <div id="outer">
          {/* <Coverpage /> */}

          <div id="inside-left">
          <button id="t1" onClick={toptab1}>Applicant Details</button>
          <button id="t2" onClick={toptab2}>Application Details</button>
          {/* <button id="t3" onClick={toptab3}>Documents</button> */}
        </div>
        
        <div id="inside-right">
        <div id="right-top">
         
         </div>
        <div id="display">
          
        </div>
      </div> </div>
    );
  }
}




export default App;