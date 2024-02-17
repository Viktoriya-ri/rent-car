import {configureStore} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage';
import { catalogReducer } from './carsSlice';
import {    
    persistStore, 
    FLUSH, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER, 
    REHYDRATE 
} from 'redux-persist';


const carsPersistConfig = {
    key: 'cars',
    storage,
    whitelist: ['catalog']
};

export const store = configureStore({
    reducer: {
        cars: persistReducer(carsPersistConfig, catalogReducer),
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },        
    }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);