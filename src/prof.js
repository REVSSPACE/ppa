import React from 'react';
import './prof.css';


function Professional()
{
    
    return (
        <div id="mainp" >
       
            <div id="sec1p">
                <div id="District">
                    <label for="District">District<span style={{color:"#ff0000"}}>*</span></label><br />
                    <select id="District" name="dt" style={{width: "11rem",height:"2em"}}>
                        <option value="salem">salem</option>
                        <option value="erode">erode </option>
                        <option value="tiruppur">tiruppur </option>
                    </select>  
                </div>
                <div id="Engineer">
                    <label for="eng">Registered Professional<span style={{color:"#ff0000"}}>*</span></label><br />
                    <select id="eng" name="engg" style={{width: "11rem",height:"2em"}}>
                        <option value="e1">Engineer1</option>
                        <option value="e2">Engineer2 </option>
                        <option value="e3">Engineer3 </option>
                    </select>
                </div></div>
               <div id="op">
                    <img  src="./download.jpg" alt="engineer" style={{border:"1px solid grey",height:"10rem",width:"10rem"}} />

                    <div>
                        <h4>Professional Name :</h4> 
                        <h4>Address:</h4>
                        <h4>Mobile No:</h4>
                        <h4>Email id:</h4>
                        <h4>Registration Number:</h4><br /><br />
                    </div>
               </div>
            
     
        <div id="nxt">
        
        <input  id="next" type="button" value="Save & Next" />
        </div>
        </div>
    
        );
}
export default Professional;