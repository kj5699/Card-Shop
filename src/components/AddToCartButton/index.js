import React from 'react';
import styles from './style.module.scss';

const AddToCartButton = ({count = 0}) => {
  return (
    <div className= {styles.addToCartButton}>
        Add To Cart
    </div>
  )
}

export default AddToCartButton;