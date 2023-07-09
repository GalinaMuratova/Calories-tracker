import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="main-nav">
                <ul className='nav-list'>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;