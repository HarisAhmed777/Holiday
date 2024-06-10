import React from "react";
import { useState,useEffect } from "react";
import './admindashboard.css'

function Allusers(){
    const[data,setdata] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8888/allusers').then(res=>res.json()).then(view=>{
            console.log(view);
            setdata(view)})
        .catch(error=>{
            console.error("Error occured",error);
        });
    
    },[]);
    return (
        <>
        <div className="hei  container">
            <h1 className="clr text-center">All users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>LastName</th>
                        <th>Mobile Number</th>
                        <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.firstname}</td>
                            <td>{value.lastname}</td>
                            <td>{value.mobilenumber}</td>
                            <td>{value.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
    
    
}
export default Allusers;