// Sidebar.js
import React, { useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './index.css'

const Sidebar = () => {


  

    return (
        <div id="side">
            <a style={{backgroundColor:'#dc3545'}} href="/products" >Products</a><br/>
            <a style={{backgroundColor:'#2962ff'}} href="/norders" >New Orders</a><br/>
            <a style={{backgroundColor:'#FF00FF'}} href="/porders" >Past Orders</a>
            <a style={{marginTop:'25px',backgroundColor:'#2e8400'}} href="/users" >Users</a>
            <a style={{marginTop:'25px',backgroundColor:'#00FFFF'}} href="/analytics" >Sales & Analytics</a>
        </div>
    );
}

export default Sidebar;
