import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import ApplicantDetails from './Applicant';
import './App.css';
// import SiteAddress from './siteadd';
import Toptab from './toptab';
import Toptab2 from './toptab2';
// import Toptab3 from './toptab3';
// import Coverpage from './cover';
import Jsons from './jsonparse';
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
     const lay =()=> {
      const x= document.getElementById("laysub");
      x.style.display ="block";
     }
     const build =()=> {
      const x= document.getElementById("buildsub");
      x.style.display ="block";
     }

     const Reclas =()=> {
      const x= document.getElementById("reclasssub");
      x.style.display ="block";
     }


    return (
      <div id="outer">
          {/* <Coverpage /> */}
          <div id="list">
            <ul>
              <li onClick={lay}>Layout Approval
                  <ul  id="laysub" hidden>
                    <li>Layout Application</li>
                    <li>Layout Approval</li>
                  </ul>
              </li> 
              <li onClick={build}>Building Plan Permission
              <ul id="buildsub" hidden>
                    <li>Building Plan Application</li>
                    <li>Building Plan Approval</li>
                  </ul>
              </li>
              <li onClick={Reclas}>Reclassification
                  <ul id="reclasssub" hidden>
                        <li>Building Plan Application</li>
                        <li>Building Plan Approval</li>
                  </ul>
              </li>
            </ul>
          </div>
          <div id="inside-left">
          <button id="t1" onClick={toptab1}>Applicant Details</button>
          <button id="t2" onClick={toptab2}>Application Details</button>
          <button id="t3"  Disabled>Documents</button>
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