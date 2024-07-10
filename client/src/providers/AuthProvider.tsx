/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

type Props = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Auth = createContext<Props>({
  setToken: () => {},
  token: null,
});

import React from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem("sync-token") || null
  );

  return (
    <Auth.Provider
      value={{
        setToken,
        token,
      }}
    >
      {children}
    </Auth.Provider>
  );
}
