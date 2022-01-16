import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    return <Dialogs dialogs={props.dialogs} messages={props.messages} addMessage={props.addMessage} />
};

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}
export default connect(mapStateToProps, { addMessage })(DialogsContainer);