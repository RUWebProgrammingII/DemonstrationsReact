import { createContext } from 'react';
import connectToSocketIOServer from 'socket.io-client';

const SocketContext = createContext({
    socket: connectToSocketIOServer('http://localhost:3500')
});

export default SocketContext;
