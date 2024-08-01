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
  const [token, setToken] = useState<string | null>(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchToken = urlParams.get("token");

    if (searchToken) {
      localStorage.setItem("sync-token", searchToken);

      const url = new URL(window.location.toString());
      url.searchParams.delete("token");
      window.history.replaceState({}, document.title, url.pathname);

      return searchToken;
    }

    const storedToken = localStorage.getItem("sync-token");

    return storedToken || null;
  });

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
