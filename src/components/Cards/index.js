import React from 'react';
import AddToCartButton from '../AddToCartButton';
import styles from './style.module.scss';


const ExpenseCard = ({cardDetail, index}) => {
  
  return (
    <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
            <img alt='' card='' src ={cardDetail?.img_url} />
        </div>
        <div className={styles.cardContent} >
            <div className={styles.headingRow}>
                <div className={styles.name}>{cardDetail?.name}</div>
                <div className={styles.price}> &#x24; {cardDetail?.final_price}</div>
            </div>
            <div className={styles.description}>
                {cardDetail?.description}
            </div>
        </div>
        <AddToCartButton />

    </div>
  )
}

export default ExpenseCard