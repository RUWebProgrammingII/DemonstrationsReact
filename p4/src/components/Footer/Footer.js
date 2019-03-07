import React from 'react';
import { UserConsumer } from '../../context/UserContext';
import { ThemeConsumer } from '../../context/ThemeContext';
import { connect } from 'react-redux';
import User from '../User/User';
import RoundedImage from '../RoundedImage/RoundedImage';

const Footer = props => {
    const { imgUrl } = props;
    console.log(imgUrl);
    return (
        <ThemeConsumer>
            {
                themeContext => {
                    return (
                        <UserConsumer>
                            { userContext => {
                                return <footer className={ `navbar fixed-bottom navbar-${themeContext.current} bg-${themeContext.current}` }>
                                    <RoundedImage imgUrl={ imgUrl } />
                                    <User />
                                    <button type="button" onClick={() => userContext.changeUser({ username: 'jonb', fullName: 'Jon' })} className="btn btn-primary">Update User</button>
                                    <button type="button" onClick={() => themeContext.toggleTheme()} className="btn btn-primary">Toggle theme</button>
                                </footer>
                            } }
                        </UserConsumer>
                    )
                }
            }

        </ThemeConsumer>
    )
};

const mapStateToProps = reduxStoreState => {
  return {
    /* I have the freedom to make this object look like I want */
    imgUrl: reduxStoreState.user.encodedImg
  };
};

export default connect(mapStateToProps)(Footer);
