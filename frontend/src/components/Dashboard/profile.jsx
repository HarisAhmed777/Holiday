import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../content';
import './profile.css';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Profile() {
    const [data, setData] = useState([]);
    const { user } = useContext(Context);
    console.log(user);

    useEffect(() => {
        fetch(`http://localhost:8888/user?email=${user}`)
        .then(res => res.json())
        .then(view => {
            console.log("Received data", view);
            setData(view);
        })
        .catch(error => {
            console.error("Error fetching data", error);
        });
    }, [user]);

    return (
        <div className='profile-container'>
            <h1 className='profile-header'>Your Profile</h1>
            {data.length > 0 && data.map(profile => (
                <div key={profile._id} className='profile-item row'>
                    <p><span className='profile-label'>Firsts Name:</span> <span className='profile-value d-inline'>{profile.firstname}</span></p>
                    <p><span className='profile-label'>Last Name:</span> <span className='profile-value d-inline'>{profile.lastname}</span></p>
                    <p><span className='profile-label'>Mobile Number:</span> <span className='profile-value d-inline'>{profile.mobilenumber}</span></p>
                    <p><span className='profile-label'>Email:</span> <span className='profile-value d-inline'>{profile.email}</span></p>
                    {/* Add more fields as needed */}
                </div>
            ))}
        </div>
    );
}

export default Profile;
