import React, { Component } from 'react';
import './App.css';
import InsetList from './list';

import VerticalTabs from './vertical';

class App extends Component {
  render() {
 
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
      
          <div id="list"  >
          <InsetList />
            {/* <ul id="ul">
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
            </ul> */}
          </div>
          <div id="inside-left">
          <VerticalTabs />
        
        </div>
         </div>

    );
  }
}




export default App;