import React from "react"
import {useSelector} from 'react-redux';
import {selectCatalog} from '../redux/selector';
import CarCard from "./CarCard";
import {nanoid} from '@reduxjs/toolkit';
import { WrapListCars } from "./Car.styled";


export default function CarsList(){
  const catalog = useSelector(selectCatalog);

  const Arr = Array.isArray(catalog) && catalog.length > 0;

  return(
    <WrapListCars>
      {Arr &&
      catalog.map(item => {
        return <CarCard key={nanoid()} item={item} />;
      })}
    </WrapListCars>
  );
}