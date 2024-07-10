export type FetchResponse = {
  status: boolean;
  message: string;
  data: object | null;
};

export type Client = {
  id: string;
  name: string;
  email: string;
  image: string;
  createdAt: string;
};
