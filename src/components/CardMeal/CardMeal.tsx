import React from 'react';
import {Link} from "react-router-dom";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

interface Props {
    mealTime:string;
    description:string;
    calorie: number;
    id:string;
    deleteMeal: () => void;
    isLoading:boolean
}

const CardMeal:React.FC<Props> = (props) => {
    return (
            <div className="card my-3">
                <div className="card-header text-capitalize">
                    {props.mealTime}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.description}</h5>
                    <p className="card-text">{props.calorie} kcal</p>
                    <Link className='btn btn-primary' to={'/edit/'+ props.id}>Edit</Link>
                    <button className='ms-4 btn btn-danger' onClick={props.deleteMeal} disabled={props.isLoading}>
                        {props.isLoading && <ButtonSpinner/>}
                        Delete</button>
                </div>
            </div>
    );
};

export default CardMeal;