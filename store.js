import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import restaurantReducer from './features/restaurantSlice'

//REDUX TOOL USED TO COMBINE ALL SLICES GLOBALLY
export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer
    },
})