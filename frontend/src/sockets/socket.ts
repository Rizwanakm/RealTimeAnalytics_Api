import { io, Socket } from 'socket.io-client';
const URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:5000';
export const socket: Socket = io(URL, { autoConnect: true });

export default socket;
