import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Client } from "../../../types";

type Props = {
  isLoggedIn: boolean;
  user: Client;
};

const initialState: Props = {
  isLoggedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    image: null,
    createdAt: "",
    bio: null,
  },
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setProfile: (state, action: PayloadAction<Props>) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
    },
    reset: (state) => {
      state.isLoggedIn = false;
      state.user = {
        id: "",
        name: "",
        email: "",
        image: null,
        createdAt: "",
        bio: null,
      };
    },
  },
});

export const { setProfile, reset } = userSlice.actions;
export default userSlice.reducer;
