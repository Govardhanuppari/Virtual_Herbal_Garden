// src/components/LoginPopup.js
import React, { useState } from 'react';

function LoginPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={togglePopup} className="login-btn">Login</button>
      {isOpen && (
        <div className="wrapper">
          <div className="popup">
            <span className="icon-close" onClick={togglePopup}>×</span>
            <div className="container active">
              <h2>Login</h2>
              <button className="login-btn">Login Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPopup;
