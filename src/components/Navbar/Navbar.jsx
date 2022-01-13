import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to={'/profile'} className={e => e.isActive ? styles.active : styles.item}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/dialogs'} className={e => e.isActive ? styles.active : styles.item}>Dialogs</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/music'} className={e => e.isActive ? styles.active : styles.item}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/users'} className={e => e.isActive ? styles.active : styles.item}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={'/setting'} className={e => e.isActive ? styles.active : styles.item}>Setting</NavLink>
            </div>
        </div>
    );
};

export default Navbar;