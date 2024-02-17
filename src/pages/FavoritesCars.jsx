import React, {useEffect} from 'react';
import { CarsFavorites } from "../components/CarsFavorites";
import {useDispatch} from 'react-redux';
import { fetchFavorite } from '../redux/server';


export const FavoritesCars = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFavorite());
    }, [dispatch]);

    return(
        <div>
            <CarsFavorites />
        </div>
    );
};