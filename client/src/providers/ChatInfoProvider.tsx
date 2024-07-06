import { createContext, useState } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

export const ChatInfoDrawerContext = createContext<Props>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
});

import React from "react";

const ChatInfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ChatInfoDrawerContext.Provider
      value={{ isOpen, onClose, onOpen, onToggle }}
    >
      {children}
    </ChatInfoDrawerContext.Provider>
  );
};

export default ChatInfoProvider;
