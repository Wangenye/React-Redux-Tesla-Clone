import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import carReducer from '../features/carSlice/CarSlice'

export const store = configureStore({
    reducer: {
        car: carReducer,
    },
});