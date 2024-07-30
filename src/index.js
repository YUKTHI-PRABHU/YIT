import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import yitImage from './images/yit.jpg';

// Navbar component remains unchanged
function Navbar({ handleSignupClick, handleLoginClick }) {
  return (
    <div className="topnav">
      <div className='name'>Yenepoya Institute Of Technology</div>
      <a href="#signup" onClick={handleSignupClick}>Admin</a>
      <a href="#login" onClick={handleLoginClick}>Student</a>
    </div>
  );
}

// Signup component remains unchanged
function Signup({ closeSignup }) {
  return (
    <div className="signup-overlay">
      <div className="signup-form">
        <button className="close-btn" onClick={closeSignup}>X</button>
        <h2>Admin</h2>
        <form action="/submit-form" method="post">
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

// Login component remains unchanged
function Login({ closeLogin }) {
  return (
    <div className="login-overlay">
      <div className="login-form">
        <button className="close-btn" onClick={closeLogin}>X</button>
        <h2>Student</h2>
        <form action="/login" method="post">
        <div class="form-group">
        <label for="username">USN</label>
        <input type="text" id="username" name="username" required/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

// App component modified to handle image and form visibility
function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showYitImage, setShowYitImage] = useState(true); // Initially show YIT image

  const handleSignupClick = (event) => {
    event.preventDefault();
    setShowSignup(true);
    setShowLogin(false); // Ensure login form is closed when signup form opens
    setShowYitImage(false); // Hide YIT image
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    setShowLogin(true);
    setShowSignup(false); // Ensure signup form is closed when login form opens
    setShowYitImage(false); // Hide YIT image
  };

  const closeSignup = () => {
    setShowSignup(false);
    setShowYitImage(true); // Show YIT image when signup form is closed
  };

  const closeLogin = () => {
    setShowLogin(false);
    setShowYitImage(true); // Show YIT image when login form is closed
  };

  return (
    <>
      <Navbar handleSignupClick={handleSignupClick} handleLoginClick={handleLoginClick} />
      {showSignup && <Signup closeSignup={closeSignup} />}
      {showLogin && <Login closeLogin={closeLogin} />}
      {/* Conditionally render YIT image based on showYitImage state */}
      {showYitImage && (
        <div className='container'>
          <img src={yitImage} alt='YIT' className='img' />
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
