import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import AddToCartButton from '../AddToCartButton';
import styles from './style.module.scss';


const ExpenseCard = ({cardDetail, index ,onAddtoCardClicked, cart, onReduceFromCartClicked}) => {
  
  const inCartCount = useMemo(()=>{
    const itemIndex = cart?.items?.findIndex(item=>item?.id === cardDetail?.id);
    if(itemIndex!== -1){
        return cart?.items[itemIndex]?.quantity;
    }else{
        return 0
    }  
  },[cart, cardDetail?.id])
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
            <img alt='' card='' src ={cardDetail?.img_url} />
            {cardDetail?.original_price && <div className={styles.discountChip}>{(cardDetail?.original_price - cardDetail?.final_price) / cardDetail?.original_price * 100}% OFF</div>}
        </div>
        <div className={styles.cardContent} >
            <div className={styles.headingRow}>
                <div className={styles.name}>{cardDetail?.name}</div>
                <div className={styles.price}> {cardDetail?.original_price&&<span className={styles.dashedPrice}> &#x24; {cardDetail?.original_price}</span>} &#x24; {cardDetail?.final_price}</div>
            </div>
            <div className={styles.description}>
                {cardDetail?.description}
            </div>
        </div>
        <AddToCartButton onClick={onAddtoCardClicked} count={inCartCount} onReduceFromCart = {onReduceFromCartClicked} />
    </div>
  )
}
const mapStateToProps =(state)=>{
    return {
        cart: state.user.cart,
    }
}

export default connect(mapStateToProps)(ExpenseCard);