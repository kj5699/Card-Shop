import React from 'react';
import Navbar from '../Navbar';
import styles from './style.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container} >
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout;