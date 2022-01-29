import { createSlice } from '@reduxjs/toolkit';

const initialState = { isCartVisible: false };

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        toggleUiCart(state) {
            state.isCartVisible = !state.isCartVisible;
        }
    }
});

export const { toggleUiCart } = uiSlice.actions;

export default uiSlice.reducer;