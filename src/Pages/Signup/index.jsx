import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '..//Login/index.css';
import Navbar from '../../Components/Atoms/Navbar';

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Perform any authentication logic here (e.g., checking credentials)
    // If authentication is successful, navigate to the dashboard page
    navigate('/'); // Navigate to the dashboard page
  };

  const handleback = (e) => {
    e.preventDefault(); 
    navigate('/'); // Navigate to the dashboard page
  };

  return (
    <div>
      <Navbar/>
      <h1 style={{fontStyle:'oblique',marginTop:'40px',fontSize:'30px',fontFamily:''}}>E-Commerce Admin</h1>
      <h1 style={{fontStyle:'oblique'}}>Sign Up</h1>
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
        <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
          <input type="text"/>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input type="text"/>
          <br />
          <label style={{ display: "block", marginBottom: "5px" }}>Passward</label>
          <input type="text"/>
          <br />
          <label style={{ display: "block", marginBottom: "5px" }}>Address</label>
          <input type="text" />
          <button type="submit">Signup</button> {/* Submit button */}
          <button onClick={handleback}>Back</button> {/* Submit button */}
        </div>
      </form>
    </div>
  );
};

export default Signup;
