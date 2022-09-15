import React from 'react';
import './Applicant.css';
import Checking from './District-Taluk-Village';
// import Jsons from './jsonparse';
// import Talukas from './Taluk';
// import Village from './village';

function ApplicantDetails()
{
    
    return (
        <div id="main" >
        <div id="top">
            <div id="applicanttype">
                <label for="ApplicantType">Applicant type<span style={{color:"#ff0000"}}>*</span></label><br />
                <select id="ApplicantType" name="Atype" style={{width: "11rem",height:"2em"}}>
                    <option value="ind">Individual</option>
                    <option value="join">Joint venture</option>
                    <option value="power">Power of Attorney/Lease Hold</option>
                </select>
            </div>
            <div id="applicantname">
                <label>Applicant Name<span style={{color:"#ff0000"}}>*</span></label><br />
                <input type="text" />
            </div>
            <div id="firmname">
                <label>Firm Name</label><br />
                <input type="text" />
            </div>
        </div>
        
        <h4>Address</h4>
        <div id="bottom">
            <div id="sec1">
                {/* <div id="District" >
                    <label for="District">District<span style={{color:"#ff0000"}}>*</span></label><br />
                    <Jsons /> 
                </div>
                <div id="Taluk">
                    <label for="Taluk">Taluk<span style={{color:"#ff0000"}}>*</span></label><br />
                    <Talukas /> 
                </div>
                <div id="village/Town/City">
                    <label for="localbodies">village/city/town<span style={{color:"#ff0000"}}>*</span></label><br />
                    <Village />  
                </div> */}
                <Checking />
            </div>
            <br />
            <div id="sec2">
                <div id="Addressline1">
                    <label>AddressLine-1<span style={{color:"#ff0000"}}>*</span></label><br />
                    <input type="text" />
                </div>
                <div id="Addressline2">
                    <label>AddressLine-2</label><br />
                    <input type="text" />
               </div>
                <div id="Addressline3">
                    <label>AddressLine-3</label><br />
                    <input type="text" />
                </div>
            </div>
            <br />
            <div id="sec3">
                <div id="pincode">
                    <label>Pincode<span style={{color:"#ff0000"}}>*</span></label><br />
                    <input type="text" />
                </div>
                <div id="mobileno">
                    <label>MobileNumber<span style={{color:"#ff0000"}}>*</span></label><br />
                    <input type="text" />
                </div>
                <div id="landline">
                    <label>LandLine</label><br />
                    <input type="text" />
                </div>
            </div>
            <br />
            <div id="sec4">
                <div id="email">
                    <label>Email Address<span style={{color:"#ff0000"}}>*</span></label><br />
                    <input type="text" />
                </div>
                <div id="website">
                    <label>Website</label><br />
                    <input type="text" />
                </div>
            </div>
        </div>
        <br />
        <div id="nxt">
        <input  id="next" type="button" value="Save & Next" />
        </div>
        </div>
    
        );
}
export default ApplicantDetails;