import React from 'react'
import Professional from './prof';
import ReactDOM from 'react-dom'
import ApplicantDetails from './Applicant';
import SiteAddress from './siteadd';
// import './toptab2.css';

function Toptab2()
{
    const siteDetails = () => {
        ReactDOM.render(<ApplicantDetails />,document.getElementById("display"));
         
    }
        
      const Approval = () => {
        ReactDOM.render(<SiteAddress />,document.getElementById("display"));
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