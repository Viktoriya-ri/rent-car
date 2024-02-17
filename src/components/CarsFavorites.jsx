import React from 'react';
import {WrapListCars} from './Car.styled';
import {useSelector} from 'react-redux';
import {selectFavorites} from '../redux/selector';
import CarCard from './CarCard';
import {nanoid} from '@reduxjs/toolkit';

export const CarsFavorites = () => {
    const selectedCars = useSelector(selectFavorites);

    const Arr = Array.isArray(selectedCars) && selectedCars.length > 0;

    return (
        <WrapListCars>
            {Arr && 
              selectedCars.map(item => {
                return <CarCard key={nanoid()} item={item}/>;
              })}
        </WrapListCars>
    );
}