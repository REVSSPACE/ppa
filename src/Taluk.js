import React from 'react'
import Subdiv from './subdiv.json'
// import Jsons from './jsonparse';
// import Jsons from './jsonparse';
// import {$} from 'jquery';


 export default function Talukas() 
 {
      
    //   console.log(x);
        var filterdata = Subdiv.filter(item => item?.District_Name === 'SALEM' )
        const uniqueIds = [];

        const Subdivfilter = filterdata.filter(element => {
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
