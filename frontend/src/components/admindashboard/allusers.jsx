import React, { useState, useEffect } from "react";
import './admindashboard.css';
import { baseUrl } from "../../url";

function Allusers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/allusers`)
            .then(res => res.json())
            .then(view => {
                console.log(view);
                setData(view);
            })
            .catch(error => {
                console.error("Error occurred", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 clr">All Users</h1>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
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
        </div>
    );
}

export default Allusers;
