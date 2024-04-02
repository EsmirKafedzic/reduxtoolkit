import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        isLoading: true,
        singleProduct: {},
        loadingSingleProduct: false
    },
    reducers: {
        getAllProductsAction: (state, action) => {
            state.allProducts = action.payload
            state.isLoading = false
        },
        getSingleProductAction: (state, action) => {
            // console.log(action.payload);
            state.singleProduct = action.payload
        }
    }
}) 

export const {getAllProductsAction, getSingleProductAction} = productSlice.actions;
export default productSlice.reducer;