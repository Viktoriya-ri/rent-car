import React from "react";
import {WraAppBar} from './Pages.styled';
import Navigation from './Navigation';


export const AppBar = () => {
    return (
        <WraAppBar>
            <Navigation />
        </WraAppBar>
    );
}