import React from "react";
import { useState,useEffect } from "react";
import './admindashboard.css'

function Allbookings(){
    const[data,setdata] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8888/allbookings').then(res=>res.json()).then(view=>{
            console.log(view);
            setdata(view)})
        .catch(error=>{
            console.error("Error occured",error);
        });
    
    },[]);
    return (
        <>
        <div className="hei container">
            <h1 className="clr text-center">Bookings are</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Persons</th>
                        <th>Adults</th>
                        <th>Children</th>
                        <th>Start Date</th>
                        <th>End Date</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.persons}</td>
                            <td>{value.adults}</td>
                            <td>{value.children}</td>
                            <td>{new Date(value.startdate).toLocaleDateString()}</td>
                            <td>{new Date(value.enddate).toLocaleDateString()}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
    
    
}
export default Allbookings;