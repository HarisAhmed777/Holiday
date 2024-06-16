import React, { useState } from "react";
import './signup.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../url";

function Signup() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error message
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/register`, { firstname, lastname, mobilenumber, email, password })
            .then(res => {
                alert("Account created successfully");
                navigate('/home');
            })
            .catch(err => {
                if (err.response && err.response.status === 409) {
                    setError('User already exists');
                } else {
                    setError('An unexpected error occurred');
                }
                console.log(err);
            });
    }

    return (
        <div className='signup-container'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input className='form-control-sign' onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" type="text" />
                <input className='form-control-sign' onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" type="text" />
                <input className='form-control-sign' onChange={(e) => setMobilenumber(e.target.value)} placeholder="Mobile number" type="number" />
                <input className='form-control-sign' onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input className='form-control-sign' onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                {error && <p className="error-message text-danger">{error}</p>} 
                <button className='btn-login '>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
