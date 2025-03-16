import { configureStore } from "@reduxjs/toolkit";
import formReducer from './features/formData';
import errorReducer from './features/errorSlice';

export const store = configureStore({
    reducer: {
        formData: formReducer,
        error: errorReducer,
    }
});


export default store;