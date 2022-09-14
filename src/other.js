import React from 'react'
import './other.css'
export default function Otherdetails()
{
    return(
        <>
            <div>
                <label>Form A</label><br />
                <input type="text"/>
                 <input type="file" />
            </div>
            <div>
                <label>Form C</label><br />
                <input type="text"/>
                 <input type="file" />
            </div>
            <div class="qns">
                <label>If vacant, the last previous use</label><br />
                <div class="yesNo">
                    <input type="radio" name="yn1" />Yes
                    <input type="radio" name="yn1" />No
                </div>
            </div>
            <div class="qns">
                <label>State whether the applicant owns or controls any adjoining land</label><br />
                <div class="yesNo">
                    <input type="radio" name="yn2" />Yes
                    <input type="radio" name="yn2" />No
                </div>
            </div>
            
            <div class="qns">
                <label>Does the proposed deelopment involving felling of any trees</label><br />
                <div class="yesNo">
                    <input type="radio" name="yn3" />Yes
                    <input type="radio" name="yn3" />No
                </div>
            </div>
            <div class="qns">
                <label>Does the proposed deelopment involving erection of any advertisment board?</label><br />
                <div class="yesNo">
                    <input type="radio" name="yn4" />Yes
                    <input type="radio" name="yn4" />No
                </div>
            </div>
            <div class="qns">
                <label>Whether the land in question is propoerty belonging to a Wakf or a Hindu Religious</label><br />
                <div class="yesNo">
                    <input type="radio" name="yn5" />Yes
                    <input type="radio" name="yn5" />No
                </div>
            </div>
            <div class="qns">
                <label>Applicant's right over the land to make the proposed development(document evidence to be enclosed)</label><br />
                <div class="yesNo">
                    <input type="radio" name="yn6" />Yes
                    <input type="radio" name="yn6" />No
                </div>
            </div>
            <div class="qns">
                <label>If so,whether proper prior approval or authority clearance has been obtained for the proposed development</label><br />
                <div class="yesNo">
                    <input type="radio" name="yn7" />Yes
                    <input type="radio" name="yn7" />No
                </div>
            </div>
            <div class="qns">
                <label>State whether burial ground is there in 30mtrs from site</label><br />
                <div class="yesNo">
                    <input type="radio" name="yn8" />Yes
                    <input type="radio" name="yn8" />No
                </div>
            </div>
            <div id="nxt" style={{paddingTop:"1em"}}>
                <input  id="next" type="button" value="Save & Next" />
                </div>
        </>
    );
}