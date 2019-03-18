import React from 'react';
import { socket } from './services/socketService';
import ChatWindow from './components/ChatWindow/ChatWindow';

class App extends React.Component {
    componentDidMount() {
        socket.on('users', userList => {
            this._populateUserList(userList);
        });
    }
    _populateUserList(userList) {
        this.setState({
            users: userList.map((u, idx) => `User ${idx + 1}`)
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <ChatWindow users={ users } />
            </div>
        );
    }
};

export default App;
