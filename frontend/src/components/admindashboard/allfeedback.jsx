import React from "react";
import { useState,useEffect } from "react";


function Allfeedback(){
    const[data,setdata] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8888/allfeedback').then(res=>res.json()).then(view=>{
            console.log(view);
            setdata(view)})
        .catch(error=>{
            console.error("Error occured",error);
        });
    
    },[]);
    return (
        <>
        <div className="hei container">
            <h1 className="clr text-center">Feedbacks</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.feedback}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
    
    
}
export default Allfeedback;