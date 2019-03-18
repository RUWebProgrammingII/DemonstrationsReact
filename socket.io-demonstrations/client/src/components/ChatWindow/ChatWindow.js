import React from 'react';
import { socket } from '../../services/socketService';

class ChatWindow extends React.Component {
    componentDidMount() {
        console.log(socket);
        socket.on('message', message => {
            const { messages } = this.state;
            this.setState({ messages: [ ...messages, message ] });
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            messages: [], /* List of all messages within the public lobby */
            message: '' /* Current message */
        };
    }
    sendMessage(message) {
        if (message === '') { return false; }
        socket.emit('message', message);
        this.setState({ message: '' });
    }
    render() {
        const { users } = this.props;
        const { messages, message } = this.state;
        return (
            <div className="chat-window">
                <ChatWindow.Title />
                <ChatWindow.Messages messages={ messages } />
                <ChatWindow.Users users={ users } />
                <div className="input-container">
                    <input type="text" value={ message } onChange={e => this.setState({ message: e.target.value })} placeholder="Enter your message here..." />
                    <button type="button" onClick={() => this.sendMessage(message)}>Send</button>
                </div>
            </div>
        );
    }
};

ChatWindow.Title = () => (
    <h3>
        <span className="first">C</span>
        <span className="second">h</span>
        <span className="third">a</span>
        <span className="fourth">t</span>
        <span className="fifth">.</span>
        <span className="sixth">i</span>
        <span className="seventh">o</span>
    </h3>
);

ChatWindow.Messages = props => (
    <div className="messages">
        { props.messages.map(m => <div key={ m } className="message">{ m }</div>) }
    </div>
);

ChatWindow.Users = props => (
    <div className="users">
        { props.users.map(u => <div key={ u } className="user">{ u }</div>) }
    </div>
);

export default ChatWindow;
