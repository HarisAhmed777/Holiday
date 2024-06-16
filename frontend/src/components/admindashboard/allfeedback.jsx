import React, { useState, useEffect } from "react";
import { baseUrl } from "../../url";

function Allfeedback() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/allfeedback`)
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
            <h1 className="text-center clr">Feedbacks</h1>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
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
        </div>
    );
}

export default Allfeedback;
