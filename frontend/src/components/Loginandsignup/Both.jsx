import React, { lazy, useState } from "react";
import './Both.css'; 
import Login from "../Login/login";
import Signup from "../signup/signup";
import logingif from '../../images/logingif.gif';

function Both() {
  const [activeView, setActiveView] = useState('login');

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <>
      <div className="both-container">
      <img src={logingif} alt="Background animation" className="background-video" loading="lazy" />

        <div className="content-container">
          <div className="mobile-buttons">
            <button 
              className={`toggle-button  sbtn ${activeView === 'login' ? 'active' : ''}`} 
              onClick={() => handleViewChange('login')}
            >
              Login
            </button>
            <button 
              className={`toggle-button sbtn ${activeView === 'signup' ? 'active' : ''}`} 
              onClick={() => handleViewChange('signup')}
            >
              Signup
            </button>
          </div>
          <div className={`content ${activeView === 'login' ? 'active' : ''}`}>
            <Login />
          </div>
          <div className={`content ${activeView === 'signup' ? 'active' : ''}`}>
            <Signup />
          </div>
        </div>
      </div>
    </>
  );
}

export default Both;
