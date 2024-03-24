// Sidebar.js
import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './index.css'

const Sidebar = ({ side, onLinkClick }) => {
    const handleClick = (link) => {
        onLinkClick(link);
    };



    return (
        <div id="side">
            <a style={{backgroundColor:'#dc3545'}} href="#" onClick={() => handleClick('Products')}>Products</a><br/>
            <a style={{backgroundColor:'#2962ff'}} href="#" onClick={() => handleClick('NOrders')}>New Orders</a><br/>
            <a style={{backgroundColor:'#FF00FF'}} href="#" onClick={() => handleClick('POrders')}>Past Orders</a>
            <a style={{marginTop:'25px',backgroundColor:'#2e8400'}} href="#" onClick={() => handleClick('Users')}>Users</a>
            <a style={{marginTop:'25px',backgroundColor:'#00FFFF'}} href="#" onClick={() => handleClick('sales')}>Sales & Analytics</a>
        </div>
    );
}

export default Sidebar;
