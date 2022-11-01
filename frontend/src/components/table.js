import { useState } from "react/cjs/react.development";
import Rows from "./rows";
import React from 'react';
import '../App.css';

export default function Table(){
    const [rowsData, setRowsData] = useState([]);
 
    const addTableRows = ()=>{
  
        const rowsInput={
            driverName:'',
            startLocation:'',
            endLocation:'',
            stockNumber:'',  
            lastEight:'',
            tollAmount:'',
            gasAmount:''
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
 
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
 
}
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                      <th scope="col">Driver Name</th>
                        <th scope="col">Start Location</th>
                        <th scope="col">End Location</th>
                        <th scope="col">Stock Number</th>
                      <th scope="col">Last 8</th>
                      <th scope="col">Toll Amount</th>
                      <th scope="col">Gas Amount</th>
                          <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                      </tr>
                    </thead>
                   <tbody>
                   <Rows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}
