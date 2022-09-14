import React from 'react'


import Subdiv from './subdiv.json'

 export default function Talukas()
 {
   
        const uniqueIds = [];

        const Subdivfilter = Subdiv.filter(element => {
        const isDuplicate = uniqueIds.includes(element.Block_Name);
    
        if (!isDuplicate) {
            uniqueIds.push(element.Block_Name);
    
            return true;
        }
    
        return false;
        });  


       const DisplayData=Subdivfilter.map((i)=>
                {   
                
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
