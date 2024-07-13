import React from "react";
import { Provider } from "react-redux";
import store from "../features/state_management/store/store";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}> {children} </Provider>;
};

export default ReduxProvider;
