/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import MainViewLayout from "../../components/layouts/MainViewLayout";
import MessageCard from "../../components/molecules/MessageCard";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useFetch } from "../../hooks/useFetch";
import { ChatInfo, FetchResponse, MessageInfo } from "../../types";
import socket from "../../utils/socket";
import { useSelector } from "react-redux";
import { RootState } from "../../features/state_management/store/store";
import { formatDateTime } from "../../utils";

const ConversationPanel = () => {
  const { token } = useAuth();
  const { chatId } = useParams();
  const [chat, setChat] = useState<ChatInfo | null>(null);
  const { user } = useSelector((state: RootState) => state.user);
  const [messages, setMessages] = useState<MessageInfo[]>([]);

  useEffect(() => {
    const setData = async () => {
      await useFetch({
        feature: "/user",
        method: "POST",
        token,
        endPoint: "/lastChat",
        body: {
          chatId: chatId,
        },
      });
    };

    if (token && chatId) {
      setData();
    }
  }, [chatId, token]);

  useEffect(() => {
    const getData = async () => {
      const res = await useFetch({
        feature: "/chat",
        method: "GET",
        token,
        endPoint: `/${chatId}`,
      });

      if (res.status === true) {
        const data = res.data as ChatInfo;
        setChat(data);
        setMessages(data.Message);
      }
    };

    if (token && chatId) {
      getData();
    }
  }, [chatId, token]);

  useEffect(() => {
    socket.on("chat-messages", (data: FetchResponse) => {
      if (data.status) {
        setMessages((prev) => [...prev, data.data]);
      }
    });

    return () => {
      socket.off("chat-messages");
    };
  }, []);

  return (
    <MainViewLayout chat={chat as ChatInfo}>
      {chat &&
        user.id &&
        messages.map((msg) => (
          <MessageCard
            content={msg.content}
            createdAt={formatDateTime(msg.createdAt)}
            image={msg.User.image || ""}
            name={msg.User.name}
            isMyMsg={msg.User.id === user.id}
          />
        ))}
    </MainViewLayout>
  );
};

export default ConversationPanel;
