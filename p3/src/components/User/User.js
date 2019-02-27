import React from 'react';
import { UserConsumer } from '../../context/UserContext';

const User = () => {
    return (
        <UserConsumer>
            {
                ({ info }) => <div>{ info.userName } - { info.fullName }</div>
            }
        </UserConsumer>
    )
}

export default User;
