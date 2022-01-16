import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUsers } from '../../Redux/usersReducer';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)
        });

    }
    render() {
        return (
            <Users users={this.props.users} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, { setUsers })(UsersContainer);