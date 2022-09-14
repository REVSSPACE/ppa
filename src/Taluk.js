import React from 'react'
// import Jsons from './jsonparse'

import Subdiv from './subdiv.json'

 export default function Talukas()
 {
       
       const DisplayData=Subdiv.map
                (
                    (i)=>{     
                    return(
                        <option value={i.Block_Name} >{i.Block_Name}</option>

                            )
                        } 
                )
      
    
    return(
      
           <select style={{width: "11rem",height:"2em"}}>
            {DisplayData}
           </select>
        

    )
 }
