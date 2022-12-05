import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping/cartSlice";
import cartUiSlice from "./shopping/cartUiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    },
});

export default store;