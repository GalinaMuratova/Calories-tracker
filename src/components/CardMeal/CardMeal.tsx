import React from 'react';
import {Link} from "react-router-dom";

interface Props {
    mealTime:string;
    description:string;
    calorie: number;
}

const CardMeal:React.FC<Props> = ({mealTime, description, calorie}) => {
    return (
            <div className="card my-3">
                <div className="card-header">
                    {mealTime}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{description}</h5>
                    <p className="card-text">{calorie} kcal</p>
                    <Link className='btn btn-primary' to='/edit/:id'>Edit</Link>
                    <button className='ms-4 btn btn-danger'> Delete</button>
                </div>
            </div>
    );
};

export default CardMeal;