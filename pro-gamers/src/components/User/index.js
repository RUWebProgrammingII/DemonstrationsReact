import React from 'react';
import { UserConsumer } from '../../context/userContext';

const User = () => (
  <UserConsumer>
    {
      userContext => {
        return (
          <div>
            <span>{ userContext.info.fullName }</span> - <span>{ userContext.info.username }</span>
          </div>
        )
      }
    }
  </UserConsumer>
);

export default User;
