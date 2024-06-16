import React, { useState, useEffect } from "react";
import './admindashboard.css';
import { baseUrl } from "../../url";

function Allbookings() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/allbookings`)
            .then(res => res.json())
            .then(view => {
                setData(view);
            })
            .catch(error => {
                console.error("Error occurred", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 clr">Bookings are</h1>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
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
        </div>
    );
}

export default Allbookings;
