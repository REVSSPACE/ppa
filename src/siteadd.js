import React from 'react';
import './siteadd.css';

function SiteAddress()
{
    
    return (
        <div id="main" >
        <h4 id="head"> Site Address</h4>
        <div id="bottom">
            <div id="sec1">
                <div id="District">
                    <label for="District">District<span style={{color:"#ff0000"}}>*</span></label><br />
                    <select id="District" name="dt" style={{width: "11rem",height:"2em"}}>
                        <option value="salem">salem</option>
                        <option value="erode">erode </option>
                        <option value="tiruppur">tiruppur </option>
                    </select>  
                </div>
                <div id="Taluk">
                    <label for="Taluk">Taluk<span style={{color:"#ff0000"}}>*</span></label><br />
                    <select id="Taluk" name="tk" style={{width: "11rem",height:"2em"}}>
                        <option value="tk1">taluk1</option>
                        <option value="tk2">taluk2 </option>
                        <option value="tk3">taluk3 </option>
                    </select>
                </div>
                <div id="village/Town/City">
                    <label for="localbodies">village/city/town<span style={{color:"#ff0000"}}>*</span></label><br />
                    <select id="localbodies" name="lb" style={{width: "11rem",height:"2em"}}>
                        <option value="lb1">localbodies1</option>
                        <option value="lb2">localbodies2 </option>
                        <option value="lb3">localbodies3 </option>
                    </select>  
                </div>
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
                <div id="OfficeAddress">
                    <label>Office Address<span style={{color:"#ff0000"}}>*</span></label><br />
                    <input type="text" />
                </div>
                <div id="Dept">
                    <label>Department</label><br />
                    <input type="text" />
                </div>
                </div>
            <br />
            <div id="sec4">
                <div id="ULB">
                    <label>ULB<span style={{color:"#ff0000"}}>*</span></label><br />
                    <input type="text" />
                </div>
               
            </div>
        </div>
        <br /><br />
        <div id="nxt">
        <input  id="next" type="button" value="Save & Next" />
        </div>
        </div>
    
        );
}
export default SiteAddress;