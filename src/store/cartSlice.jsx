import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], 
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        removeCart(state, action) {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
        }
    },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;