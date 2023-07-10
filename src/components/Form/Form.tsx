import React, {ChangeEvent, FormEvent} from 'react';
import {IMeal} from "../../types";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

interface Props {
    meal: IMeal;
    change: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
    onSubmit: (e: FormEvent) => Promise<void>;
    title:string;
    isLoading:boolean
}

const Form:React.FC<Props> = ({meal, change, onSubmit, title, isLoading = false}) => {
    return (
        <div className='mx-5'>
            <h2 className='my-4 text-center'>{title}</h2>
            <form onSubmit={onSubmit}>
                <select
                    onChange={change}
                    value={meal.mealTime}
                    name='mealTime'
                    id='meal'
                    required
                    className='form-control my-4'
                >
                    <option value=''>Select time</option>
                    <option value='breakfast'>Breakfast</option>
                    <option value='lunch'>Lunch</option>
                    <option value='snack'>Snack</option>
                    <option value='dinner'>Dinner</option>
                </select>
                <input
                    type='text'
                    name='description'
                    placeholder='Meal description'
                    value={meal.description}
                    onChange={change}
                    required
                    id='description'
                    className='form-control my-4'
                />
                <input
                    type='number'
                    name='calories'
                    placeholder='Calories'
                    value={meal.calories || ''}
                    onChange={change}
                    required
                    id='calories'
                    className='form-control my-4'
                />
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading && <ButtonSpinner/>}
                    {title}
                </button>
            </form>
        </div>
    );
};

export default Form;