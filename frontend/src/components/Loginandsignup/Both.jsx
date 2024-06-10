import React, { useState } from "react";
import './Both.css'; 
import Login from "../Login/login";
import Signup from "../signup/signup";
import Header from "../header/header";

function Both() {
  const [activeView, setActiveView] = useState('login');

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <>
      <div className="both-container pt-5">
        <div className="mobile-buttons pt-5">
          <button 
            className={`toggle-button ${activeView === 'login' ? 'active' : ''}`} 
            onClick={() => handleViewChange('login')}
          >
            Login
          </button>
          <button 
            className={`toggle-button ${activeView === 'signup' ? 'active' : ''}`} 
            onClick={() => handleViewChange('signup')}
          >
            Signup
          </button>
        </div>
        <div className={`half-width ${activeView === 'login' ? 'active' : ''}`}>
          <Login />
        </div>
        <div className={`half-width sig ${activeView === 'signup' ? 'active' : ''}`}>
          <Signup />
        </div>
      </div>
    </>
  );
}

export default Both;
