import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe0cFaZ9e5Hm9X-tdWRLSvoZqg2bjemBABA&usqp=CAU" alt="2#" />
            <NavLink to={`/dialogs/${props.id}`} className={e => e.isActive ? styles.active : styles.dialog}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;