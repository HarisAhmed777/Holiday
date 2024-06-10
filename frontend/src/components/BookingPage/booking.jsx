import React, { useState } from "react";
import './booking.css'; 
import Header from '../header/header';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../content";

function Booking() {
  const location = useLocation();
  const [city, setCity] = useState(location.state?.city || '');
  const {user} = useContext(Context);
  // console.log(user);
  const email = user;
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [persons, setPersons] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const navigate = useNavigate();

  const handleStartDateChange = (e) => {
    setStartdate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEnddate(e.target.value);
  };

  const calculateDays = () => {
    const start = new Date(startdate);
    const end = new Date(enddate);
    const differenceInTime = end - start;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays + 1; 
  };

  const calculatetotalamount = () => {
    const days = calculateDays();
    const totalamountPerDay = adults * 1100 + children * 600;
    return totalamountPerDay * days;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = {
      name,
      age,
      email,
      persons,
      city,
      startdate,
      enddate,
      adults,
      children,
      totalamount: calculatetotalamount(),
    };
    try {
      const response = await axios.post('http://localhost:8888/booking', bookingData);
      if (response.data.Status === "ok") {
        alert("Booking confirmed successfully");
        navigate('/');
      } else {
        alert("Booking failed");
      }
    } catch (error) {
      console.error("There was an error making the booking request:", error);
      alert("Booking failed");
    }
  };

  const totalamount = calculatetotalamount();

  return (
    <>
      <div className="booking-container">
        <h1 className="text-center">Book A Holiday | Book An Event | Corporate Booking</h1>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="form-group">
            <input type='text' className="form-control-booking" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-group">
            <input type='number' className="form-control-booking" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>

          <div className="form-group">
            <input type='number' className="form-control-booking" placeholder="Enter number of persons" value={persons} onChange={(e) => setPersons(e.target.value)} required />
          </div>

          <div className="form-group">
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter city name"
              className="form-control-booking"
              required
            />
          </div>

          <div className="form-group row container">
            <div className="col-lg-6">
              <label>Enter how many adults</label>
              <select className="select-control-booking" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                {[...Array(11).keys()].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-6 ">
              <label>Enter how many children</label>
              <select className="select-control-booking" value={children} onChange={(e) => setChildren(Number(e.target.value))}>
                {[...Array(11).keys()].map (num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Start Date:</label>
            <input type="date" className="form-control-booking" value={startdate} onChange={handleStartDateChange} required />
          </div>

          <div className="form-group">
            <label>End Date:</label>
            <input type="date" className="form-control-booking" value={enddate} onChange={handleEndDateChange} required />
          </div>

          <div className="text-center">
            <h5>The total amount will be: {totalamount} Rs</h5>
          </div>

          <div className="text-center">
            <button type="submit" className="btn-signup btnbook">Book Now</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Booking;
