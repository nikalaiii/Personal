import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  name: string;
  email: string;
  nation: string;
  sex: string;
  drink: string;
  size: string;
  game: string;
  lang: string;
}

const initialState: FormState = {
    name: "",
    email: "",
    nation: "",
    sex: "",
    drink: "",
    size: "",
    game: "",
    lang: "",
}

const formData = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        updateField: <K extends keyof FormState>(
            state: FormState,
            action: PayloadAction<{ key: K; value: FormState[K] }>
          ) => {
            state[action.payload.key] = action.payload.value;
          },

        setData: (state, action: PayloadAction<FormState>) => {
            return action.payload;
        }
    }
})

export default formData.reducer;
export const { updateField, setData} = formData.actions;