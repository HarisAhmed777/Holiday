import React, { useState, useContext } from "react";
import './booking.css'; 
import book from '../../images/book.jpg';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Context } from "../../content";
import { baseUrl } from "../../url";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking() {
  const location = useLocation();
  const [city, setCity] = useState(location.state?.city || '');
  const { user } = useContext(Context);
  const email = user;
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [persons, setPersons] = useState("");
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleStartDateChange = (date) => {
    setStartdate(date);
    setEnddate(date);
  };

  const handleEndDateChange = (date) => {
    setEnddate(date);
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
      mobile,
      totalamount: calculatetotalamount(),
    };
    try {
      const response = await axios.post(`${baseUrl}/booking`, bookingData);
      if (response.data.status === "ok") {
        toast.success("Booking confirmed successfully,See Dashboard", { autoClose: 3000 });
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else {
        toast.error("Try again later  ");
      }
    } catch (error) {
      toast.error("Please Login and try again");
    }
  };

  const totalamount = calculatetotalamount();

  return (
    <>
      <div className="booking-container">
        <img src={book} alt="Background" className="background-image-booking" />
        <div className="content-container-booking">
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

            <div className="form-group">
              <div className="">
                <label className="text-white">Enter how many adults</label>
                <select className="select-control-booking" value={adults} onChange={(e) => setAdults(Number(e.target.value))}>
                  {[...Array(11).keys()].map(num => (
                    <option key={num} value={num} className="clcc">{num}</option>
                  ))}
                </select>
              </div>
              <div className="">
                <label className="text-white">Enter how many children</label>
                <select className="select-control-booking" value={children} onChange={(e) => setChildren(Number(e.target.value))}>
                  {[...Array(11).keys()].map(num => (
                    <option key={num} value={num} className="clcc">{num}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="text-white">Start Date:</label>
              <DatePicker
                selected={startdate}
                onChange={handleStartDateChange}
                className="form-control-booking"
                minDate={new Date()}
                required
              />
            </div>

            <div className="form-group">
              <label className="text-white">End Date:</label>
              <DatePicker
                selected={enddate}
                onChange={handleEndDateChange}
                className="form-control-booking"
                minDate={startdate}
                required
              />
            </div>

            <div className="form-group">
              <label className="text-white ">Mobile Number:</label>
              <div className="phone-input-container d-inline">
                <PhoneInput
                  country={'in'}
                  value={mobile}
                  onChange={setMobile}
                  inputClass="form-control-booking bg-dark text-white"
                  specialLabel=""
                  countryCodeEditable={false}
                />
              </div>
            </div>

            <div className="text-center">
              <h5 className="text-white">The total amount will be: {totalamount} Rs</h5>
            </div>

            <div className="text-center">
              <button type="submit" className="btn-booking">Book Now</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Booking;
