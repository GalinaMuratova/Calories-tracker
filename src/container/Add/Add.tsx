import React, { ChangeEvent, useState } from 'react';
import { IMeal } from "../../types";
import axiosApi from "../../axiosApi";
import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";

const IMealState: IMeal = {
    mealTime: '',
    description: '',
    calories: 0,
};

const Add = () => {
    const navigation = useNavigate();
    const [meal, setMeal] = useState<IMeal>(IMealState);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axiosApi.post('meals.json', meal);
        } catch (e) {
            console.log(e)
        } finally {
            navigation('/');
            setMeal(IMealState);
            setLoading(false)
        }
    };

    const change = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setMeal((prevState) => ({
            ...prevState,
            [name]: name === 'calories' ? parseInt(value) : value,
        }));
    };

    return (
        <div>
            <Form meal={meal} change={change} onSubmit={onSubmit} title='Add meal' isLoading={loading}/>
        </div>
    );
};

export default Add;
