import React from 'react';
import { useState } from 'react';
import purpack from '../../images/packenq.png';
import './packagepurchase.css'; 
import { baseUrl } from '../../url';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PackagePurchase () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfAdults, setNumberOfAdults] = useState('');
  const [numberOfChildren, setNumberOfChildren] = useState('');
  const [packageType, setPackageType] = useState('');


  const handleSubmit = async (e) => {
      e.preventDefault();

      const response = await fetch(`${baseUrl}/purchase-package`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              firstName,
              lastName,
              mobileNumber,
              email,
              numberOfAdults,
              numberOfChildren,
              packageType
          })
      });

      if (response.ok) {
          alert('Package purchase submitted successfully');
          setFirstName('');
          setLastName('');
          setMobileNumber('');
          setEmail('');
          setNumberOfAdults('');
          setNumberOfChildren('');
          setPackageType('');
      } else {
          alert('Error submitting package purchase');
      }
  };
  return (
    <>
    <div className='text-center'>
      <h1 className='clr'>Package Details</h1>
      <imd src={purpack} alt=""  className='purimd'/>
    </div>
    <div>
      <h1 className='text-center clr'>TERMS AND CONDITION</h1>
      <p className='container'><b>Bookings and Payments</b><br/>
        Booking Process: All bookings must be made through our website or authorized booking platforms.
Payment: Full payment must be made at the time of booking unless otherwise specified. We accept various payment methods, including credit/debit cards and online payment systems.
Confirmation: Once payment is received, you will receive a booking confirmation via email. Please check the details carefully and notify us immediately if there are any errors.
Cancellations and Refunds: Cancellations must be made in writing. Refunds are subject to our cancellation policy, which varies by package and season. Please refer to the specific package details for more information.<br/>
<b>Maximum Occupancy</b><br/>

Occupancy Limits: Each booking is limited to a maximum of 3 adults and 1 child. Any booking exceeding this limit will not be accepted. Please ensure that your booking complies with this occupancy limit to avoid any inconvenience or additional charges.
<br/><b>Changes to Bookings</b><br/>

Customer-Initiated Changes: If you wish to make changes to your booking, please contact us as soon as possible. Changes are subject to availability and may incur additional charges.
Company-Initiated Changes: In rare circumstances, we may need to make changes to your booking. We will notify you as soon as possible and offer alternatives of equal or higher value. </p>
    </div>
    <div className='enquire-container text-center container'> 
      <h1> Enquire Now</h1>
      <div>
      <form className='row' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Enter your first name'
                        className='col-12 col-lg-6 col-md-12'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Enter your last name'
                        className='col-12 col-lg-6 col-md-12'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <PhoneInput
                  country={'in'}
                  value={mobileNumber}
                  onChange={setMobileNumber}
                  inputClass="col-12 col-lg-6 col-md-12 mob"
                  specialLabel=""
                  countryCodeEditable={false}
                />
                    <input
                        type='email'
                        placeholder='Enter your email id'
                        className='col-12 col-lg-6 col-md-12'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder='Enter no. of adults'
                        className='col-12 col-lg-6 col-md-12'
                        value={numberOfAdults}
                        onChange={(e) => setNumberOfAdults(e.target.value)}
                    />
                    <input
                        type='number'
                        placeholder='Enter no. of children'
                        className='col-12 col-lg-6 col-md-12'
                        value={numberOfChildren}
                        onChange={(e) => setNumberOfChildren(e.target.value)}
                    />
                    <select
                        className='text-dark col-12 col-lg-6 col-md-12'
                        value={packageType}
                        onChange={(e) => setPackageType(e.target.value)}
                    >
                        <option value=''>Select Package</option>
                        <option value='HoneyMoon Package'>HoneyMoon Package</option>
                        <option value='Adventure Package'>Adventure Package</option>
                        <option value='Family Package'>Family Package</option>
                        <option value='Luxury Package'>Luxury Package</option>
                        <option value='Cultural Package'>Cultural Package</option>
                        <option value='Beach Package'>Beach Package</option>
                    </select>
                    <div className='text-center mt-3 col-12'>
                        <button className='btnpack text-white' type='submit'>Submit</button>
                    </div>
                </form>
      </div>
    </div>
    </>
  );
};

export default PackagePurchase;
