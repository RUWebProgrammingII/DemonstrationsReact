import React from 'react';
import RoundedImage from '../RoundedImage/RoundedImage';
import { UserConsumer } from '../../context/UserContext';

const User = props => {
    const { imgUrl } = props;
    return (
        <UserConsumer>
            { userContext => {
                return (
                    <div>
                        <RoundedImage url={ imgUrl } />
                        <span>{ userContext.info.fullName }</span> - <span>{ userContext.info.username }</span>
                    </div>
                );
            } }
        </UserConsumer>
    )
};

export default User;
