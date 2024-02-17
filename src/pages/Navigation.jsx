import React from 'react';
import { WrapNavigation } from './Pages.styled';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <WrapNavigation>
        <NavLink to="/" className="navigate">Home</NavLink>
        <NavLink to="/catalog" className="navigate">Catalog</NavLink>
        <NavLink to="/favorites" className="navigate">Favorites</NavLink>
      </WrapNavigation>
    )
}