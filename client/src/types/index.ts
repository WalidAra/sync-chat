/* eslint-disable @typescript-eslint/no-explicit-any */
export type FetchResponse = {
  status: boolean;
  message: string;
  data: any;
};

export type Client = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  createdAt: string;
  bio: string | null;
};

export type Fetch = {
  endPoint?: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  token?: string | null;
  feature: "/chat" | "/user" | "/auth";
};

export type Friend = {
  id: string;
  clientId: string;
  userId: string;
};

export type FriendRequest = {
  id: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    image: string;
    createdAt: string;
    email: string;
  };
};

export type Chat = {
  adminId: string | null;
  createdAt: string;
  id: string;
  image: string | null;
  isGroup: boolean;
  name: string | null;
};

export type Member = {
  id: string;
  userId: string;
  chatId: string;
  joinedAt: string;
  User: Client;
};

export type ChatInfo = Chat & {
  Member: Member[];
  Message: MessageInfo[];
};

export type MessageInfo = Message & {
  User: Client;
  MessageAttachments: string[];
};

export type Message = {
  content: string;
  senderId: string;
  chatId: string;
  type: "SIMPLE" | "COMPLEX";
  attachments: string[];
  createdAt:string;
};

