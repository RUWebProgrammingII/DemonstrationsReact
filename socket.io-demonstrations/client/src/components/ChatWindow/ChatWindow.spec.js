import React from 'react';
import { shallow } from 'enzyme';
import { SocketIO, Server } from 'mock-socket';
import ChatWindow from './ChatWindow';

jest.useFakeTimers();

jest.mock('../../services/socketService', () => {
    return {
        socket: {
            on: () => {}
        }
    }
});

describe('ChatWindow tests', () => {
    let mockSocketServer, mockSocket;

    beforeEach(() => {
        mockSocketServer = new Server('http://localhost:3050'); /* This can be any available port */

        mockSocketServer.on('connection', socket => {
            socket.on('message', message => {
                socket.emit('message', message);
            });
        });

        mockSocket = SocketIO.connect('http://localhost:3050'); /* Connecting to the fake SocketIO server */

        /* A must for the socket.io to work, which relies on timers */
        jest.runOnlyPendingTimers();
    });

    it('should emit the right message', () => {
        const message = 'Hello, everybody!';
        const component = shallow(<ChatWindow />);

        component.find('input[type="text"]').first().simulate('input', { target: { value: message } });
        component.find('button').first().simulate('click');

        expect(component.state().messages.length).toBe(1);
        expect(component.state().messages[0]).toEqual(`${(new Date()).toLocaleTimeString()} - ${message}`);
    });

    afterEach(() => {
        mockSocketServer.stop();
        mockSocket.close();
    });
});
