import React, { useState } from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    const [message, setMessage] = useState('');
    const addPost = () => {
        props.addMessage(message);
        setMessage('')
    }
    const messagesElements = props.messages.map(m => <Message message={m.message} />);
    const dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    return (
        <div className={styles.dialogsPageItems}>
            <div>
                {dialogsElements}
            </div>
            <div>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <input type="text" placeholder={'Enter your message'} value={message} onChange={e => setMessage(e.currentTarget.value)} />
                </div>
                <div>
                    <button onClick={addPost}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;