// Dashboard.js
import React, { useState } from 'react';
import Navbar from "../../Components/Atoms/Navbar";
import Sidebar from "../../Components/Molecules/Sidebar";
import "./index.css"; // Import CSS file for styling
import Products from '../../Components/Molecules/Products';
import Orders from '../../Components/Molecules/Orders';
import Users from '../../Components/Molecules/Users';
import { MdDarkMode, MdWbSunny } from "react-icons/md"; // Import icons
import POrders from '../../Components/Molecules/POrders';
import Analytics from '../../Components/Molecules/Analytics';

const Dashboard = () => {
    const [selectedLink, setSelectedLink] = useState('Products'); // Initialize with 'Products'
    const [backgroundColor, setBackgroundColor] = useState('lightblue'); // Initialize with transparent
    const [isDarkMode, setIsDarkMode] = useState(false); // Initialize with light mode
    const [color, setColor] = useState('black'); // Initialize with light mode

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    const handleBackgroundChange = () => {
        if (isDarkMode) {
            setBackgroundColor('lightblue'); // Change to light mode
            setColor('black');
        } else {
            setBackgroundColor('#212f46'); // Change to dark mode
            setColor('white');
        }
        setIsDarkMode(!isDarkMode); // Toggle mode
    };

    return (
        <div>
            <Navbar onBackgroundChange={handleBackgroundChange} isDarkMode={isDarkMode} /> {/* Pass down the state-changing function and current mode */}
            <div className="dashboard-container" style={{ backgroundColor: backgroundColor,color: color }}>
                <Sidebar onLinkClick={handleLinkClick} />
                <div style={{
                    maxWidth: "500px",
                    margin: "0 auto",
                    borderRadius: "10px",
                    justifyContent: "center",
                }}><hr></hr>
                    {selectedLink === 'Products' && <Products/>}
                    {selectedLink === 'NOrders' && <Orders/>}
                    {selectedLink === 'Users' && <Users/>}
                    {selectedLink === 'POrders' && <POrders/>}
                    {selectedLink === 'sales' && <Analytics/>}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
