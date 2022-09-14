import './sitedetails.css'

export default function SiteDetails()
{
    return(
        <div id="out">
         <h4>Site Details</h4> 
            <div id="part1">
               
                <div>
                    <label for="surveytype">Survey No. Type<span style={{color:"#ff0000"}}>*</span></label><br />
                        <select id="surveytype" name="st" style={{width: "11rem",height:"2em"}}>
                            <option value="salem">salem</option>
                            <option value="erode">erode </option>
                            <option value="tiruppur">tiruppur </option>
                        </select>
                </div> 
                    <div>
                        <label for="proposal">Proposal category<span style={{color:"#ff0000"}}>*</span></label><br />
                        <select id="proposal" name="pc" style={{width: "11rem",height:"2em"}}>
                            <option value="salem">salem</option>
                            <option value="erode">erode </option>
                            <option value="tiruppur">tiruppur </option>
                        </select>
                    </div>
            </div>
            <h4>Survey field Number/Revenue survey no.</h4>
            <div id="part2">
                
                <div>
                <label for="surveyno">Survey no Type<span style={{color:"#ff0000"}}>*</span></label><br />
                        <select id="surveyno" name="sc" style={{width: "11rem",height:"2em"}}>
                            <option value="salem">salem</option>
                            <option value="erode">erode </option>
                            <option value="tiruppur">tiruppur </option>
                        </select>
                </div>
                <div>
                <label>Survey No.<span style={{color:"#ff0000"}}>*</span></label><br />
                    <input type="text" />
                </div>
                <div>
                <label>Sub division No.<span style={{color:"#ff0000"}}>*</span></label><br />
                    <input type="text" />
                </div> 

            </div>
            <br />
            <input type="button" value="+ Add details" style={{backgroundColor:"skyblue" ,border:"0px" }} /> 
            
            <div id="part3">
                <div>
                    <label for="Landtype">Land Type<span style={{color:"#ff0000"}}>*</span></label><br />
                            <select id="Landtype" name="Lt" style={{width: "11rem",height:"2em"}} >
                                <option value="salem">salem</option>
                                <option value="erode">erode </option>
                                <option value="tiruppur">tiruppur </option>
                            </select>
                </div>
                <div>
                <label>District collector NOC File</label><br />
                <input type="text"/>
                 <input type="file" />
                </div>
                <div>
                <label>Site Photographs<span style={{color:"#ff0000"}}>*</span></label><br />
                <input type="text"/>
                 <input type="file" />
                </div>
            </div>
           
            <div id="part4">
           
                <div class="inner">
                    <div>
                    <label>Latitude</label><br />
                        <input type="text" />
                    </div>
                    <div>
                    <label>Longitude</label><br />
                        <input type="text" />
                    </div>
                    <div>
                    <label for="Apprtype">Approval Type<span style={{color:"#ff0000"}}>*</span></label><br />
                            <select id="Apprtype" name="sc" style={{width: "11rem",height:"2em"}}>
                                <option value="salem">salem</option>
                                <option value="erode">erode </option>
                                <option value="tiruppur">tiruppur </option>
                            </select>
                    </div>
                </div>
                <div class="inner" >
                    <div>
                    <label for="present">Present use of Land<span style={{color:"#ff0000"}}>*</span></label><br />
                            <select id="present" name="sc" style={{width: "11rem",height:"2em"}}>
                                <option value="salem">salem</option>
                                <option value="erode">erode </option>
                                <option value="tiruppur">tiruppur </option>
                            </select>
                    </div>
                    <div>
                    <label for="proposed">proposed use of Land<span style={{color:"#ff0000"}}>*</span></label><br />
                            <select id="proposed" name="sc" style={{width: "11rem",height:"2em"}}>
                                <option value="salem">salem</option>
                                <option value="erode">erode </option>
                                <option value="tiruppur">tiruppur </option>
                            </select>
                    </div>
                    <div>
                    <label>Purpose of Land of use</label><br />
                        <input type="text" />
                    </div>
                </div>
                    <div id="innersub">
                            <div>
                                <label for="special">Area of Special Character<span style={{color:"#ff0000"}}>*</span></label><br />
                                <select id="special" name="sc" style={{width: "11rem",height:"2em"}}>
                                    <option value="salem">salem</option>
                                    <option value="erode">erode </option>
                                    <option value="tiruppur">tiruppur </option>
                                </select>
                           </div>
                            
                            <div >
                            <label>The Extend prior tof 05.08.1975</label><br />
                                <input type="text" />
                            </div>
                    
                    </div>

            </div>

                <div id="nxt" style={{paddingTop:"1em"}}>
                <input  id="next" type="button" value="Save & Next" />
                </div>
        </div>
    );
}