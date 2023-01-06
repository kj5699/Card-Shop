import React, { Suspense } from 'react';
import styles from './style.module.scss';
import { AiOutlineStar } from "react-icons/ai";
import data from '../../data/data.json'
import * as UserActions from '../../store/actions/user';
import { connect } from 'react-redux';
const ExpenseCardLazy = React.lazy(()=>import('../../components/Cards'));

const ListingPage = (props) => {
    console.log('CART', props.cartCount, props.cart );
  return (
    <div className={styles.listingPage}>
        <div className={styles.listingHeader}>
            <div className={styles.heading}>Most Popular</div>
            <div className={styles.divider}>
                <div className={styles.line}></div>
                <div className={styles.dividerImage}><AiOutlineStar size={24} color ={'#2596be'} /></div>
                <div className={styles.line}></div>
            </div>
        </div>
        <div className={styles.cardsContainer}>
            {data?.length >0 && data?.map((card,index) => {
                return (
                    <Suspense>
                        <ExpenseCardLazy key={index} 
                        index={index} cardDetail = {card} 
                        onAddtoCardClicked = {()=> props.onAddtoCart(card, 1)} 
                        onReduceFromCartClicked = {()=>props.onRemoveOneFromCart(card?.id)} />
                    </Suspense>
                )
                })
            }
        </div>
    </div>
  )
}
const mapStateToProps =(state) =>{
    return{
        cart: state.user.cart,
        cartUpdated: state.user.cartUpdated,
        cartCount: state.user.cartCount
    }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        onAddtoCart:(product, quantity)=> dispatch(UserActions.addToCart(product,quantity)),
        onRemoveOneFromCart:(productId) => dispatch(UserActions.removeOneFromCart(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingPage);