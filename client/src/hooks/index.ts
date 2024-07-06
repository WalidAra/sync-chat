import { useContext } from "react";
import { ChatInfoDrawerContext } from "../providers/ChatInfoProvider";

export const useChatDrawer = () => useContext(ChatInfoDrawerContext);
