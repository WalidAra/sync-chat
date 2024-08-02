import { io } from "socket.io-client";
const url = import.meta.env.VITE_BASE_URL as string;
const socket = io(url);

export default socket;
