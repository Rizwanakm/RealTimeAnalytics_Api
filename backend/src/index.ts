import http from "http";
import dotenv from "dotenv";
dotenv.config();

import { app } from "./app";
import { connectDB } from "./config/db";
import { initSocket } from "./services/socket.service";

const server = http.createServer(app);

initSocket(server);
connectDB();

server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

