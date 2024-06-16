import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../content";
import './profile.css'; // Reuse the same CSS file
import { baseUrl } from "../../url";
import profile from '../../images/profile.jpg'; // Importing the profile image

function UserBooking() {
    const [data, setData] = useState([]);
    const { user } = useContext(Context);

    useEffect(() => {
        fetch(`${baseUrl}/userbooking?mail=${user}`)
            .then(res => res.json())
            .then(view => {
                setData(view);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, [user]);

    return (
        <div className='profile-container userbooking' style={{ backgroundImage: `url(${profile})` }}>
            <h1 className='profile-header text-white'>Your Bookings</h1>
            {data.length > 0 ? (
                data.map((booking, index) => (
                    <div key={index} className='profile-item'>
                        <p><span className='profile-label'>Name:</span> <span className='profile-value d-inline'>{booking.name}</span></p>
                        <p><span className='profile-label'>Age:</span> <span className='profile-value d-inline'>{booking.age}</span></p>
                        <p><span className='profile-label'>City:</span> <span className='profile-value d-inline'>{booking.city}</span></p>
                        <p><span className='profile-label'>Persons:</span> <span className='profile-value d-inline'>{booking.persons}</span></p>
                        <p><span className='profile-label'>No. of Adults:</span> <span className='profile-value d-inline'>{booking.adults}</span></p>
                        <p><span className='profile-label'>Start Date:</span> <span className='profile-value d-inline'>{new Date(booking.startdate).toLocaleDateString()}</span></p>
                        <p><span className='profile-label'>End Date:</span> <span className='profile-value d-inline'>{new Date(booking.enddate).toLocaleDateString()}</span></p>
                        <p><span className='profile-label'>Total Amount:</span> <span className='profile-value d-inline'>{booking.totalamount}</span></p>
                    </div>
                ))
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
}

export default UserBooking;
