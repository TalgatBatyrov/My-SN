import React from 'react';

const Users = (props) => {
    return (
        <div>
            {props.users.map(user => <div>
                <div>name{user.name}</div>
                <div>status{user.status}</div>
            </div>)}
        </div>
    );
};

export default Users;