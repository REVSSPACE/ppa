import React from 'react'
import Subdiv from './subdiv.json'
import  {useState} from "react";

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
         

        const [selected,setSelectedClient] = useState([]);

        
     
        function handleSelectChange(event) {
          
            console.log("selected:");
            setSelectedClient(event.target.value);
                         }
                 
                    console.log(selected);
         
                return(
      
                <div>
                    <select id="sel1" onChange={handleSelectChange} style={{width: "11rem",height:"2em"}} >
                    {DisplayData}
                    </select>
                    
                </div>
        

    );
 }


  