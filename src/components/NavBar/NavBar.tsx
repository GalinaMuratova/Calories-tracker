import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Calories tracker</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;