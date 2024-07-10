import { useContext } from "react";
import { Auth } from "../providers/AuthProvider";

export const useAuth = () => useContext(Auth);
