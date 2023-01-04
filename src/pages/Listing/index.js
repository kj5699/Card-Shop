import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { AiOutlineStar } from "react-icons/ai";
import data from '../../data/data.json'
import ExpenseCard from '../../components/Cards';


const ListingPage = () => {

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
                    <ExpenseCard index={index} cardDetail = {card} />
                )
            })
            }

        </div>
    </div>
  )
}

export default ListingPage;