import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
        
    }
}
//THIS SLICE IS USED TO GATHER ALL RESTAURANT INFO FROM HOME PAGE
export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        }
    },
  
})

// Action creators are generated for each case reducer function

export const { setRestaurant } = restaurantSlice.actions;
export const selectRestaurant = (state) => state.restaurant.restaurant;
export default restaurantSlice.reducer