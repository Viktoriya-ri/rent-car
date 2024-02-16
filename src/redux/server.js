import axios  from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit';
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

axios.defaults.baseURL = 'https://65cd2a62dd519126b8403437.mockapi.io';

export const fetchCatalog = createAsyncThunk(
    'cars/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get('/cars');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.messange);
        }
    }
);

export const addCars = createAsyncThunk(
    'cars/addCars',
    async (id, thunkAPI) => {
        try {
            const  response = await axios.put(`/cars/${id}`, {completed:true});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteCars = createAsyncThunk(
    'cars/deleteCars',
    async (id, thunkAPI) => {
        try {
            const response = await axios.put(`/cars/${id}`, {completed: false});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchFavorite = createAsyncThunk(
    'cars/fetchFavorite',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/cars?completed=true');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);