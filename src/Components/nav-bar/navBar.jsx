import React, { useState } from 'react';
import './navBar.css';

function NavBar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <header>
            <a href="/" id="logo">nio ES6</a>
            
            <ul id="navlist">
                <div id="hackex">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Buy now">Buy now</a></li>
                    <li><a href="#Contact+us">Contact us</a></li>
                </div>
                <li id="res"><button className='svg' onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill="#bbbbbb" /></svg></button></li>
            </ul>
            <ul id="sidebar" style={{ display: sidebarVisible ? 'flex' : 'none' }}>
                <li id="ser"><button className='svg' onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" fill="#bbbbbb" /></svg></button></li>

                <a href="/" id="logo-sidebar">nio ES6</a>
                <br></br>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Buy now">Buy now</a></li>
                <li><a href="#Contact+us">Contact us</a></li>
            </ul>
        </header>
    );
}

export default NavBar;
