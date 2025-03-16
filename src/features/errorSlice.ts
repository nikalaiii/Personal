import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ErrorState = {name: string | null, message: string | null};

const initialState: ErrorState = {name: null, message: null};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<ErrorState>) => {
            return action.payload;
        }
    }
})

export default errorSlice.reducer;

export const { setError } = errorSlice.actions;