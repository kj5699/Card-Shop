import React, { useMemo } from 'react';
import { HiArrowLeft, HiPlus } from 'react-icons/hi';
import { connect } from 'react-redux';
import {useNavigate } from 'react-router';
import AddToCartButton from '../../components/AddToCartButton';
import styles from './style.module.scss';
import * as UserActions from '../../store/actions/user';

const OrderItemListComponent = ({navigate, cart, onRemoveOneFromCart,onAddtoCart, isCartEmpty }) => (
    <div id='OrderItemList' className={styles.orderItemList}>
        {!isCartEmpty?<div className={styles.headingBody}>
            <div className={`${styles.headingRow} ${styles.row}`}>
                    <div>S.No</div>
                    <div>Items</div>
                    <div>Qty</div>
            </div>
            {cart?.items.map((item,index)=>(
                <>
                {item?.quantity ?
                <div key={item?.id} className={`${styles.row} ${styles.itemRow}`}>
                    <div>{index+1}</div>
                    <div>{item.name}</div>
                    <AddToCartButton count={item?.quantity} counterButtonClassName= {styles.counterButtonClassName} onReduceFromCart={()=>onRemoveOneFromCart(item?.id)} onClick={()=>onAddtoCart(item,1)} />
                </div>:null}
                </>
            ))}
            
        </div>:<div>Cart is Empty</div>}
        <div className={styles.addMoreButton} onClick={()=>navigate('/')}>
            <HiPlus size={16} color={'#2596be'}/>
            <span className={styles.label}> Add more items</span>
        </div>
    </div>
);

const OrderPriceListComponent = ({cart, cartTotal}) =>{
    return(
        <div id='OrderItemPriceList' className={styles.orderPrices}>
                <div className={styles.heading}>
                    Price Details
                </div>
                <div className={styles.priceList}>
                    {cart?.items.map((item, index) => (
                        <div className={styles.priceRow}>
                            <div className={styles.keyName}>{item?.quantity}   X   &#x24; {item?.final_price.toFixed(2)}</div>
                            <div className={styles.value}>  &#x24; {(item?.quantity * item?.final_price).toFixed(2)}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.priceList}>
                    <div className={styles.priceRow}>
                        <div className={styles.keyName}>Total Savings</div>
                        <div className={styles.value.concat(' ').concat(styles.discount)}> &#x24; {parseInt('18').toFixed(2)}</div>
                    </div>
                    <div className={styles.priceRow}>
                        <div className={styles.keyName}>Dilevery Fee</div>
                        <div className={styles.value}>  &#x24; {parseInt('5').toFixed(2)}</div>
                    </div>
                    <div className={styles.priceRow}>
                        <div className={styles.keyName}>Taxes and Charges</div>
                        <div className={styles.value}>   {parseInt('2').toFixed(2)}</div>
                    </div>
                </div>
                <div className={styles.finalSection}>
                    <div className={styles.priceRow}>
                        <div className={styles.finalKey}>To Pay</div>
                        <div className={styles.finalValue}>&#x24; {cartTotal}</div>
                    </div>
                    <div className={styles.placeOrderButton}> Place Order</div>
                </div>
            </div>
        )
};



const SummaryPage = (props) => {
  
  const navigate = useNavigate();
  const [cartTotal, isCartEmpty]  = useMemo(()=>{
      let total=0;
      props.cart.items.forEach(item => {
          total += item?.quantity * item?.final_price
      })
      const isCartEmpty = props?.cart?.items?.length === 0;
      return [total, isCartEmpty];
  },[props.cart]);


  return (
    <div id='SummaryPage' className={styles.summaryPage}>
        <div id='BackToHomeSection' className={styles.backButton} onClick = {()=>navigate('/')}>
            <HiArrowLeft size={16} color={'#3C4852'}/>
            <span className={styles.label}> Back To Home </span>
        </div>
        <div id='HeadingSection' className={styles.summaryHeading}>
             {isCartEmpty?'Your cart is empty.':'Order Summary'} 
             {!isCartEmpty?<span>{`(${props.cart?.items?.length} items)`}</span>:<span>  (Please go back to add items in your cart) </span>}
        </div>
        <div id='OrderSummarySection' className={styles.orderSummary}>
            {!isCartEmpty&& <OrderItemListComponent {...props} navigate={navigate} isCartEmpty={isCartEmpty} />}
            {!isCartEmpty&&<OrderPriceListComponent cartTotal={cartTotal}  cart= {props.cart}/>}   
        </div>
    </div>
  )
}
const mapStateToProps = (state) => {
    return{
        cart:state.user.cart
    }
};
const mapDispatchToProps =(dispatch) =>{
    return{
        onAddtoCart:(product, quantity)=> dispatch(UserActions.addToCart(product,quantity)),
        onRemoveOneFromCart:(productId) => dispatch(UserActions.removeOneFromCart(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);