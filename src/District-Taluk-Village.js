import React from 'react'
import Subdiv from './subdiv.json'
import  {useState} from "react";
import './District-Taluk-Village.css'
 export default function Checking()
 {

        const [selectedDt,setSelectedClient1] = useState([]);  
        const [selectedTk,setSelectedClient2] = useState([]); 
        const [selectedVg,setSelectedClient3] = useState([]);   
        
        const uniqueIds = [];
                /*      district filter         */
        const Dtfilter = Subdiv.filter(element => {
        const isDuplicate = uniqueIds.includes(element.District_Name);
            
        if (!isDuplicate) {
            uniqueIds.push(element.District_Name);
    
            return true;
        }
    
        return false;
        });  
           const DisplayDataDistrict=Dtfilter.map
                (
                    (i)=>{     
                    return(
                        
                        <option value={i.District_Name} >{i.District_Name}</option>
                        
                            )
                        } 
                )
                
            /*    end of  district filter         */

            /*      Taluk filter         */
            
            var talukfilterdata = Subdiv.filter(item => item?.District_Name === selectedDt );

                const SubdivfilterTaluk = talukfilterdata.filter(element => {
                    const isDuplicate = uniqueIds.includes(element.Block_Name);
                        
                    if (!isDuplicate) {
                        uniqueIds.push(element.Block_Name);
                
                        return true;
                    }
                
                    return false;
                    });  
                const DisplayDataTaluk=SubdivfilterTaluk.map
                (
                    (i)=>{     
                    return(
                        
                        <option value={i.Block_Name} >{i.Block_Name}</option>
                        
                            )
                        } 
                )
          /*    end of  Taluk filter         */
           /*      village filter         */
           var villagefilterdata = Subdiv.filter(item => item?.Block_Name === selectedTk );
                const DisplayDataVillage=villagefilterdata.map
                (
                    (i)=>{     
                    return(
                      
                        <option value={i.Village_Name} >{i.Village_Name}</option>
                        
                            )
                        } 
                )
         

        

        
     
        function handleSelectChangeDt(event) {
          
            console.log("selected:",selectedDt);
            setSelectedClient1(event.target.value);
                         }
                         function handleSelectChangeTk(event) {
          
                            console.log("selected:",selectedTk);
                            setSelectedClient2(event.target.value);
                                         }
                                         function handleSelectChangeVg(event) {
          
                                            console.log("selected:",selectedVg);
                                            setSelectedClient3(event.target.value);
                                                         }
                 
                    
         
                return(
      
                <div id="dtv">
                    <div>
                        <label> District</label><br />
                        <select id="sel1"  onChange={handleSelectChangeDt} style={{width: "11rem",height:"2rem"}} >
                        <option value="" disabled selected>Select District</option>
                        {DisplayDataDistrict}
                        </select>
                    </div>
                    <div>
                        <label> Taluk</label><br />
                        <select id="sel2"  onChange={handleSelectChangeTk} style={{width: "11rem",height:"2rem"}} >
                        <option value="" disabled selected>Select Taluk</option>
                        {DisplayDataTaluk}
                        </select>
                    </div>
                    <div>
                        <label> Villages</label><br />
                        <select id="sel3"  onChange={handleSelectChangeVg} style={{width: "11rem",height:"2rem"}} >
                        <option value="" disabled selected>Select Village</option>
                        {DisplayDataVillage}
                        </select>
                    </div>
                </div>
        

    );
 }


  