import * as actionTypes from '../actions/actionTypes';


const initialState={
    cart:{
        items:[]
    },
    cartCount:0,
    cartValue:0,
    cartUpdated:false,
    error:null,
    loading:false,
}
const reducer =(state =initialState,action)=>{
    switch(action.type){
        case(actionTypes.ADD_TO_CART_SUCCESS):
                const userCartItems = [...state.cart.items];
                let cartIndex = userCartItems.findIndex(item => item?.id === action?.data?.product?.id)
                if (cartIndex !== -1){
                    let updatedObject = {...userCartItems[cartIndex]};
                    updatedObject.quantity =(userCartItems[cartIndex]?.quantity || 0) +1;
                    userCartItems.splice(cartIndex,1);
                    userCartItems.splice(cartIndex,0,updatedObject);
                }else{
                    userCartItems.push({...action?.data?.product, quantity:1})
                } 
            return{...state, loading:false,
                            error:null, cart:{items: userCartItems} , cartCount: state.cartCount+1}
                
            
            

        case(actionTypes.REMOVE_FROM_CART_SUCCESS):
                const currentCartItems = [...state.cart.items];
                let updatedCount = state?.cartCount
                let itemIndex = currentCartItems.findIndex(item => item?.id === action?.productId)
                if (itemIndex !== -1 && currentCartItems[itemIndex].quantity>=action?.quantity){
                    let updatedObject = {...currentCartItems[itemIndex]};
                    updatedObject.quantity =currentCartItems[itemIndex]?.quantity - +action?.quantity;
                    currentCartItems.splice(itemIndex,1);
                    if(updatedObject.quantity>=1){
                        currentCartItems.splice(itemIndex,0,updatedObject);
                    }
                    updatedCount = updatedCount- +action.quantity
                }
                return{...state, loading:false,
                                error:null, 
                                cart:{items: currentCartItems} , cartCount: Math.max(updatedCount,0)
                }
        default:
            return state;
                    }
    
}
export default reducer;