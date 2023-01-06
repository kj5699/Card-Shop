import React from 'react';
import styles from './style.module.scss';
import { HiOutlineShoppingCart, HiUserCircle } from "react-icons/hi";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

const Navbar = ({isSummaryPage=false, cartCount}) => {
  const router = useNavigate()
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
        <img className={styles.logoImage} alt='' src={'https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg'} />
            Happay
        </div>
        <div className={styles.leftIcons}>
            {
                !isSummaryPage && 
                <div className={styles.cartIcon} onClick = {()=>(router('/summary'))}>
                    <HiOutlineShoppingCart size={20}/>
                    {cartCount?<div className={styles.cartCount}> {cartCount} </div>:null}
                </div>
            }
            <div className={styles.avatar}>
                    <HiUserCircle size = {24} color={'#2596be'}/>
            </div>
        </div>
    </div>
  );
};
const mapStateToProps = (state) =>{
    return {
        cartCount : state.user.cartCount,
    }
}
export default connect(mapStateToProps,)(Navbar);