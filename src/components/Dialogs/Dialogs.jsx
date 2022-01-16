import React, { useState } from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    const [message, setMessage] = useState('');

    const addPost = () => {
        props.addMessage(message);
        setMessage('');
    }

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div>
                    <input type="text" placeholder={'Enter your message'} value={message} onChange={e => setMessage(e.currentTarget.value)} />
                </div>
                <div>
                    <button onClick={addPost}>Add message</button>
                </div>
            </div>
        </div >
    );
};

export default Dialogs;