import React from 'react';

export default function Rows({rowsData, deleteTableRows, handleChange}) {
    return(
        
        rowsData.map((data, index)=>{
            const {driverName, startLocation, endLocation, stockNumber, lastEight, tollAmount, gasAmount}= data;
            return(
                
                <tr key={index}>
                   
                <td>
               <input type="text" value={driverName} onChange={(evnt)=>(handleChange(index, evnt))} name="driverName" className="form-control"/>
                </td>
                <td><input type="text" value={startLocation}  onChange={(evnt)=>(handleChange(index, evnt))} name="startLocation" className="form-control"/> </td>
                <td><input type="text" value={endLocation}  onChange={(evnt)=>(handleChange(index, evnt))} name="endLocation" className="form-control" /> </td>
                <td><input type="text" value={stockNumber}  onChange={(evnt)=>(handleChange(index, evnt))} name="stockNumber" className="form-control" /> </td>
                <td><input type="text" value={lastEight}  onChange={(evnt)=>(handleChange(index, evnt))} name="lastEight" className="form-control" /> </td>
                <td><input type="text" value={tollAmount}  onChange={(evnt)=>(handleChange(index, evnt))} name="tollAmount" className="form-control" /> </td>
                <td><input type="text" value={gasAmount}  onChange={(evnt)=>(handleChange(index, evnt))} name="gasAmount" className="form-control" /> </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
            )
        })
   
    )
    
}
