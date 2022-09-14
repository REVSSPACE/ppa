import React from 'react'
import  JsonData from './csvjson.json'
// import Subdiv from './subdiv.json'

 export default function Jsons()
 {
    
       const DisplayData=JsonData.map
                (
                    (i)=>{     
                    return(
                        <option value={i.District_Code} >{i.District_Name}</option>

                            )
                        } 
                )
        
 

    
    return(
      
                <div>
                    <select style={{width: "11rem",height:"2em"}}>
                    {DisplayData}
                    </select>
                </div>
        

    )
 }
