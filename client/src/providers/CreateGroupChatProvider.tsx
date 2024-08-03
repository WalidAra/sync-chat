/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { useRef, useState } from "react";
import { Client, Friend } from "../types";

type Props = {
  users: (Friend & { User: Client })[];
  setUsers: React.Dispatch<React.SetStateAction<(Friend & { User: Client })[]>>;

  selectedUsers: (Friend & { User: Client })[];
  setSelectedUsers: React.Dispatch<
    React.SetStateAction<(Friend & { User: Client })[]>
  >;

  nameRef: React.MutableRefObject<any>;
  descriptionRef: React.MutableRefObject<any>;
};

const GroupChatContext = React.createContext<Props>({
  users: [],
  setUsers: () => {},
  selectedUsers: [],
  setSelectedUsers: () => {},
  nameRef: { current: null },
  descriptionRef: { current: null },
});

export default function CreateGroupChatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [users, setUsers] = useState<(Friend & { User: Client })[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<
    (Friend & { User: Client })[]
  >([]);
  const nameRef = useRef<any>();
  const descriptionRef = useRef<any>();
  return (
    <GroupChatContext.Provider
      value={{
        descriptionRef,
        nameRef,
        selectedUsers,
        setSelectedUsers,
        setUsers,
        users,
      }}
    >
      {children}
    </GroupChatContext.Provider>
  );
}

export const useGroupChat = () => React.useContext(GroupChatContext);
