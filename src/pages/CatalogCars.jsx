import React, {useEffect} from "react";
import CarsList from "../components/CarsList";
import { fetchCatalog } from "../redux/server";
import {useDispatch} from 'react-redux';


export const CatalogCars = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatalog());
    }, [dispatch]);

    return (
        <div>
            <CarsList />
        </div>
    );
}