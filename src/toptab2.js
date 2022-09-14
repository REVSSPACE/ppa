import React from 'react'
import ReactDOM from 'react-dom'
import SiteDetails from './sitedetails';
import ApprovalDetails from './approval';
import Dwg from './dwg';
import Otherdetails from './other';


function Toptab2()
{
    const siteDetails = () => {
        ReactDOM.render(<SiteDetails />,document.getElementById("display"));
         
    }
        
      const Approval = () => {
        ReactDOM.render(<ApprovalDetails />,document.getElementById("display"));
     }
     const dwg = () => {
        ReactDOM.render(<Dwg />,document.getElementById("display"));
     }
     const others = () => {
        ReactDOM.render(<Otherdetails />,document.getElementById("display"));
     }
     
    return(
        <>
        <button id="ut1" onClick={siteDetails}>Site Details</button>
        <button id="ut2" onClick={Approval} >Approval Details </button>
        <button id="ut3" onClick={dwg} >Drawing</button>
        <button id="ut3" onClick={others} >Other Details</button>
        </>
    );

}



    


export default Toptab2;