import React from 'react';
import styles from './style.module.scss';

const AddToCartButton = ({count = 0, onClick, onReduceFromCart, counterButtonClassName}) => {
  return (
    <>
    {count===0 ?
        <div className= {styles.addToCartButton} onClick= {onClick}> Add To Cart </div> 
        :
        <div className= {`${styles.addToCartCounterButton} ${counterButtonClassName}`}>
            <div onClick={onReduceFromCart} className={styles.operations}> - </div>
            <div className={styles.label}> {count} </div>
            <div onClick={onClick} className={styles.operations}> + </div>
        </div>
    }   
    </>
  )
}

export default AddToCartButton;