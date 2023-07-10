import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import Form from "../../components/Form/Form";
import {IMeal} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const IMealState: IMeal = {
    mealTime: '',
    description: '',
    calories: 0,
};

const Edit = () => {
    const [meal, setMeal] = useState<IMeal>(IMealState);
    const [loading, setLoading] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);

    const navigate = useNavigate();
    const {id} = useParams();

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axiosApi.get<IMeal>(`/meals/${id}.json`);
            if (response) {
                setMeal(response.data);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
        }
    }, [id]);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoadingBtn(true);
            await axiosApi.put(`/meals/${id}.json`, meal);
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingBtn(false);
            navigate('/')
        }
    };

    const change = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setMeal((prevState) => ({
            ...prevState,
            [name]: name === 'calories' ? parseInt(value) : value,
        }));
    };

    let form = (
        <Form meal={meal} change={change} onSubmit={onSubmit} title={'Edit meal'} isLoading={loadingBtn} />
    );

    if (loading) {
        form = <Spinner/>;
    }

    return (
        <div>
            {form}
        </div>
    );
};

export default Edit;