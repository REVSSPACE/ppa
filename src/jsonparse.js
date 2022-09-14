import React from 'react'
// import  JsonData from './csvjson.json'
import Subdiv from './subdiv.json'


 export default function Jsons()
 {
        
    const uniqueIds = [];

    const Subdivfilter = Subdiv.filter(element => {
    const isDuplicate = uniqueIds.includes(element.District_Name);

    if (!isDuplicate) {
        uniqueIds.push(element.District_Name);

        return true;
    }
    
    return false;
    });  

       const DisplayData=Subdivfilter.map
                (
                    (i)=>{     
                    return(
                        <option value={i.District_Name} >{i.District_Name}</option>

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
