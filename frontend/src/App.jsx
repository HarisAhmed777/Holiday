import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home';
import Both from './components/Loginandsignup/Both';
import Offer from './components/offer/offer';
import Package from './components/Package/package';
import PackagePurchase from './components/PackagePurchase/packagepurchase';
import Picnic from './components/picnic/picnic';
import Booking from './components/BookingPage/booking';
import { ContextProvider, Context } from './content';
import { useContext, useEffect } from 'react';
import Header from './components/header/header'; 
import Footer from './components/footer/footer';
import Profile from './components/Dashboard/profile';
import UserBooking from './components/Dashboard/userbooking';
import Feedback from './components/Feedback/feedback';
import Allusers from './components/admindashboard/allusers';
import Admindashboard from './components/admindashboard/admindashboard';
import Allbookings from './components/admindashboard/allbookings';
import Allfeedback from './components/admindashboard/allfeedback';
import Packagereq from './components/admindashboard/packagereq';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>

      <div className='headerp'><Header/></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRedirect />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/package" element={<Package />} />
          <Route path="/packagepurchase" element={<PackagePurchase />} />
          <Route path="/picnic" element={<Picnic />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userbooking" element={<UserBooking />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin" element={<Admindashboard />} />
          <Route path="/allusers" element={<Allusers />} />
          <Route path="/allbookings" element={<Allbookings />} />
          <Route path="/allfeedback" element={<Allfeedback />} />
          <Route path="/allpackagereq" element={<Packagereq />} />
  
        </Routes>
        
      </BrowserRouter>
      <Footer/>
    </ContextProvider>
  );
}

function LoginRedirect() {
  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized } = useContext(Context);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsAuthorized(true);
      navigate('/');
    }
  }, [isAuthorized, setIsAuthorized, navigate]);

  return <Both />;
}

export default App;
