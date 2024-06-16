import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../content";
import './userbookings.css'; 
import { baseUrl } from "../../url";
import profile from '../../images/profile.jpg'; 

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
        <div className='userbooking-container-wrapper'>
            <div className='userbooking-container'>
                <h1 className='userbooking-header'>Your Bookings</h1>
                {data.length > 0 ? (
                    data.map((booking, index) => (
                        <div key={index} className='booking-item'>
                            <p className='booking-detail'><span className='booking-label'>Name:</span> <span className='booking-value'>{booking.name}</span></p>
                            <p className='booking-detail'><span className='booking-label'>Age:</span> <span className='booking-value'>{booking.age}</span></p>
                            <p className='booking-detail'><span className='booking-label'>City:</span> <span className='booking-value'>{booking.city}</span></p>
                            <p className='booking-detail'><span className='booking-label'>Persons:</span> <span className='booking-value'>{booking.persons}</span></p>
                            <p className='booking-detail'><span className='booking-label'>No. of Adults:</span> <span className='booking-value'>{booking.adults}</span></p>
                            <p className='booking-detail'><span className='booking-label'>Start Date:</span> <span className='booking-value'>{new Date(booking.startdate).toLocaleDateString()}</span></p>
                            <p className='booking-detail'><span className='booking-label'>End Date:</span> <span className='booking-value'>{new Date(booking.enddate).toLocaleDateString()}</span></p>
                            <p className='booking-detail'><span className='booking-label'>Total Amount:</span> <span className='booking-value'>{booking.totalamount}</span></p>
                        </div>
                    ))
                ) : (
                    <p className='no-bookings'>No bookings found.</p>
                )}
            </div>
        </div>
    );
}

export default UserBooking;
