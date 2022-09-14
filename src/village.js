import React from 'react'
import Subdiv from './subdiv.json'

 export default function Village()
 {
       
       const DisplayData=Subdiv.map
                (
                    (i)=>{     
                    return(
                        <option value={i.Village_Name} >{i.Village_Name}</option>

                            )
                        } 
                )
      
    
    return(
      
           <select style={{width: "11rem",height:"2em"}}>
            {DisplayData}
           </select>
        

    )
 }
