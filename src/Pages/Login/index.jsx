import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './index.css';
import Navbar from '../../Components/Atoms/Navbar';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Perform any authentication logic here (e.g., checking credentials)
    // If authentication is successful, navigate to the dashboard page
    navigate('/dashboard'); // Navigate to the dashboard page
  };
  const handlesignup = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Perform any authentication logic here (e.g., checking credentials)
    // If authentication is successful, navigate to the dashboard page
    navigate('/signup'); // Navigate to the dashboard page
  };

  return (
    <div>
      <Navbar/>
      <h1 style={{fontStyle:'oblique',marginTop:'40px',fontSize:'30px',fontFamily:''}}>E-Commerce Admin</h1>
      <h1 style={{fontStyle:'oblique'}}>Login</h1>
      <br/>
      <form
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          border: "1px solid #000000",
          borderRadius: "10px",
        }}
        onSubmit={handleLogin} // Call handleLogin function on form submission
      >
        <div style={{ padding: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input type="text" />
          <br />
          <label style={{ display: "block", marginBottom: "5px" }}>Passward</label>
          <input type="text" />
          <br />
          <button type="submit">Login</button> {/* Submit button */}
          <button onClick={handlesignup}>Signup</button>
        </div>
      
      </form>
    </div>
  );
};

export default Login;
