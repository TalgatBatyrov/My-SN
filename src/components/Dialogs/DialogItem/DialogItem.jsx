import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';
const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${props.id}`} className={e => e.isActive ? styles.active : styles.dialog}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;