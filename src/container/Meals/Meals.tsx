import React, {useCallback, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import CardMeal from "../../components/CardMeal/CardMeal";
import {IApiMeal, IMealMut} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";

const Meals = () => {
    const [infoMeal, setInfoMeal] =useState<IMealMut[]>([]);
    const [loading, setLoading] = useState(false);
    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const meals = await axiosApi.get<IApiMeal>('/meals.json');
            if (meals) {
                const mealCard = Object.keys(meals.data).map((key) => {
                    const newMeal = meals.data[key];
                    newMeal.id = key;
                    return newMeal;
                });
                setInfoMeal(mealCard);
                setLoading(false)
            }
        } catch (e) {
            console.log(e)
        } finally {
            console.log(infoMeal)
        }
    }, []);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    const reversed = [...infoMeal].reverse();
    const totalCalories = infoMeal.reduce((sum, meal) => sum + meal.calories, 0);

    let page = (
        <>
            <div className='d-flex justify-content-around my-4'>
                <p className='fs-3'>Total calories: {totalCalories} kcal</p>
                <Link to="/add" className="border border-2 navbar-brand rounded p-3" >Add new meal</Link>
            </div>
            <div className='bg-body-tertiary pt-2 px-5'>
                {reversed.map((el) => (
                    <>
                        <CardMeal key={el.id} mealTime={el.mealTime} description={el.description} calorie={el.calories}  />
                    </>
                ))}
            </div>
        </>
    )

    if (loading) {
        page = <Spinner />
    }

    return (
        <>
            {page}
        </>
    );
};

export default Meals;