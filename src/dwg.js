import React from 'react'
import './dwg.css'
export default function Dwg()
{
    return(
        <>
            <div>
                <label>Layout Design</label><br />
                <input type="text"/>
                 <input type="file" />
            </div>
            <div>
                <label>Layout Design Pdf</label><br />
                <input type="text"/>
                 <input type="file" />
                </div>
                <div>
                <label>Road Skeleton Plan</label><br />
                <input type="text"/>
                 <input type="file" />
                </div>
                <div>
                <label>Road Skeleton Plan Pdf</label><br />
                <input type="text"/>
                 <input type="file" />
                </div>


        </>
    );
}