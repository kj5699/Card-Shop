import React from 'react';
import styles from './style.module.scss';
import { HiShoppingCart } from "react-icons/hi";

const Navbar = ({isSummaryPage=false}) => {
  return (

    <div className={styles.navbar}>
        <div className={styles.logo}>
        <img className={styles.logoImage} alt='' src={'https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg'} />
            Happay
        </div>

        <div className={styles.leftIcons}>
            {
                !isSummaryPage && 
                <div className={styles.cartIcon}>
                    <HiShoppingCart size={20}/>
                    <div className={styles.cartCount}> 1 </div>
                </div>
            }
            <div className={styles.avatar}>
                <img className={styles.avatarImage} alt='' src={''}></img>
            </div>
        </div>
    </div>
  );
};

export default Navbar;