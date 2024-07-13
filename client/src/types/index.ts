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
