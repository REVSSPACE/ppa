import React from 'react'
import Professional from './prof';
import ReactDOM from 'react-dom'
import ApplicantDetails from './Applicant';
import SiteAddress from './siteadd';
import './toptab.css';

function Toptab()
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
        <button id="ut1" onClick={ApplicantClick}>Applicant</button>
        <button id="ut2" onClick={SiteClick} >Site Address</button>
        <button id="ut3" onClick={ProfClick} >Professional</button>
        </>
    );

}



    


export default Toptab;