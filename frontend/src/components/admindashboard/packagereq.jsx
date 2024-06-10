import React, { useState, useEffect } from "react";
import './admindashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Packagereq() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8888/packagaereq')
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
        <>
            <div className='package-req-container container hei'>
                <h1 className="text-center package-req-header">The Package Requests are:</h1>
                <table className="table table-responsive table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile Number</th>
                            <th>Email</th>
                            <th>Adults</th>
                            <th>Children</th>
                            <th>Package Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value, index) => (
                            <tr key={index}>
                                <td>{value.firstName}</td>
                                <td>{value.lastName}</td>
                                <td>{value.mobileNumber}</td>
                                <td>{value.email}</td>
                                <td>{value.numberOfAdults}</td>
                                <td>{value.numberOfChildren}</td>
                                <td>{value.packageType}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Packagereq;