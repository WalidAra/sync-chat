import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user.slice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
