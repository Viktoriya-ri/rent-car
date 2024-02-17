import {createSlice} from '@reduxjs/toolkit';
import { addCars, deleteCars, fetchCatalog, fetchFavorite } from './server';


const initialState = {
    catalog: [],
    selectedCars: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchCatalog.pending, handlePending)
        .addCase(fetchCatalog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.catalog = action.payload;
        })
        .addCase(fetchCatalog.rejected, handleRejected)

        .addCase(addCars.pending, handlePending)
        .addCase(addCars.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.catalog = state.catalog.map(item => {
                if(item.id === action.payload.id){
                    item.completed = true;
                }
                return item;
            });
        })
        .addCase(addCars.rejected, handleRejected)

        .addCase(deleteCars.pending, handlePending)
        .addCase(deleteCars.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.catalog = state.catalog.map(item => {
                if(item.id === action.payload.id) {
                    item.completed = false;
                }
                return item;
            });
        })
        .addCase(deleteCars.rejected, handleRejected)

        .addCase(fetchFavorite.pending, handlePending)
        .addCase(fetchFavorite.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.selectedCars = action.payload;
        })
        .addCase(fetchFavorite.rejected, handleRejected);
    },
});

export const catalogReducer = carsSlice.reducer;