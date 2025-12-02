import { Server } from "socket.io";

let io: Server;

export const initSocket = (server: any) => {
  io = new Server(server, {
    cors: { origin: "*" },
  });

  console.log("Socket.io initialized");
};

export const sendRealtimeUpdate = (data: any) => {
  if (io) {
    io.emit("analytics-update", data);
  }
};
