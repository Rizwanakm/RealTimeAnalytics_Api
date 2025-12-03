import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';

let io: IOServer | null = null;

export const initSocket = (server: HttpServer) => {
  io = new IOServer(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket) => {
    console.log('Client connected', socket.id);

    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id);
    });
  });

  return io;
};

export const broadcastEvent = (eventName: string, payload: any) => {
  if (!io) return;
  io.emit(eventName, payload);
};
