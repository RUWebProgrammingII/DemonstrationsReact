import React from 'react';
import { UserConsumer } from '../../context/UserContext';
import { ThemeConsumer } from '../../context/ThemeContext';
import User from '../User/User';
import { connect } from 'react-redux';

const Footer = props => {
    const { user } = props;
    const { updateUser, toggleTheme } = props.translations;
    return (
        <ThemeConsumer>
            {
                themeContext => {
                    return (
                        <UserConsumer>
                            { userContext => {
                                return <footer className={ `navbar fixed-bottom navbar-${themeContext.current} bg-${themeContext.current}` }>
                                    <User imgUrl={ user.imgUrl } />
                                    <button type="button" onClick={() => userContext.changeUser({ username: 'jonb', fullName: 'Jon' })} className="btn btn-primary">{ updateUser }</button>
                                    <button type="button" onClick={() => themeContext.toggleTheme()} className="btn btn-primary">{ toggleTheme }</button>
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
        user: reduxStoreState.user,
        translations: reduxStoreState.language.buttons
    };
};

export default connect(mapStateToProps)(Footer);
