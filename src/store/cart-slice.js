import { createSlice } from "@reduxjs/toolkit";

// item properties: id, title, price, description, quantity, totalPrice 
const initialCartState = {
    items: [],
    quantityOfItems: 0,
    totalPriceOfItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action) {
            // get newItem from payload 
            const newItem = action.payload;
            // check if item already exists in the cart 
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
                existingItem.totalPrice += newItem.price;
            } else {
                state.items.push(newItem);
            }
            // update quantity
            state.quantityOfItems++;
            // update total price
            state.totalPriceOfItems += newItem.price;
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const itemToRemove = state.items.find(item => item.id === id);

            if (!itemToRemove) {
                return;
            }

            if (itemToRemove.quantity === 1) {
                state.items = state.items.filter(item => item.id !== itemToRemove.id);
            } else {
                itemToRemove.quantity--;
                itemToRemove.totalPrice = itemToRemove.totalPrice - itemToRemove.price;
            }
            state.totalPriceOfItems = state.totalPriceOfItems - itemToRemove.price;
            state.quantityOfItems--;
        }
    }
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;