import React from 'react';
import {NavLink} from "react-router-dom";

const Meals = () => {
    return (
        <div>
            <NavLink to="/add">Add</NavLink>
        </div>
    );
};

export default Meals;