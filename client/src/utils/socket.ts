import { io } from "socket.io-client";
const socket = io("http://localhost:2000/");

export default socket;
