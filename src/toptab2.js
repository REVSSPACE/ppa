import React from 'react'
import Professional from './prof';
import ReactDOM from 'react-dom'
import ApplicantDetails from './Applicant';
import SiteAddress from './siteadd';
// import './toptab2.css';

function Toptab2()
{
    const ApplicantClick = () => {
        ReactDOM.render(<ApplicantDetails />,document.getElementById("display"));
         
    }
        
      const SiteClick = () => {
        ReactDOM.render(<SiteAddress />,document.getElementById("display"));
     }
     const ProfClick = () => {
        ReactDOM.render(<Professional />,document.getElementById("display"));
     }
     
    return(
        <>
        <button id="ut1" onClick={ApplicantClick}>Site Details</button>
        <button id="ut2" onClick={SiteClick} >Approval Details </button>
        <button id="ut3" onClick={ProfClick} >Drawing</button>
        <button id="ut3" onClick={ProfClick} >Other Details</button>
        </>
    );

}



    


export default Toptab2;