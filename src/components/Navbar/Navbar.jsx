import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/setting'}>Setting</NavLink>
            </div>
        </div>
    );
};

export default Navbar;