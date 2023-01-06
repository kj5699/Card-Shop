import * as actionTypes from './actionTypes';
export const addToCart=(product,quantity)=>{
    const data={
        product : product,
        quantity:quantity
    }
    return {
        type:actionTypes.ADD_TO_CART_SUCCESS,
        data : data 
    }
}
export const removeOneFromCart=(productId)=>{
    return {
        type:actionTypes.REMOVE_FROM_CART_SUCCESS,
        productId:productId,
        quantity:1
    }
}