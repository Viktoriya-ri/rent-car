import React, {Suspense} from "react";
import AppBar from './AppBar';
import { Container } from "./Pages.styled";
import CustomRoutes  from "./CustomRoutes";
import {Loading} from '../components/Loading';

export const SharedLayout = () => {
    return (
        <Container>
            <AppBar />
            <Suspense fallback={<Loading />}>
                <CustomRoutes />
            </Suspense>
        </Container>
    );
};