import connectToSocketIOServer from 'socket.io-client';

export const socket = connectToSocketIOServer('http://localhost:3500');
