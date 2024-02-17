import React, {lazy} from "react";
import {Route, Routes} from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));
const Catalog = lazy(() => import('pages/CatalogCars'));
const Favorites = lazy(() => import('pages/FavoritesCars'));
const NotFound = lazy(() => import('pages/NotFound'));

export const CustomRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};