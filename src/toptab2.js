import React from 'react'
import Professional from './prof';
import ReactDOM from 'react-dom'
import SiteAddress from './siteadd';
// import './toptab2.css';
import SiteDetails from './sitedetails';
import ApprovalDetails from './approval';

function Toptab2()
{
    const siteDetails = () => {
        ReactDOM.render(<SiteDetails />,document.getElementById("display"));
         
    }
        
      const Approval = () => {
        ReactDOM.render(<ApprovalDetails />,document.getElementById("display"));
     }
     const dwg = () => {
        ReactDOM.render(<Professional />,document.getElementById("display"));
     }
     const others = () => {
        ReactDOM.render(<Professional />,document.getElementById("display"));
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