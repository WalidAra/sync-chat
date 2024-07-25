/* eslint-disable no-empty */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { RootState } from "../features/state_management/store/store";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useToast } from "@chakra-ui/react";
import { setProfile } from "../features/state_management/slices/user.slice";
import { Client } from "../types";

const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user).user;
  const toast = useToast();

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await useFetch({
        feature: "/user",
        method: "GET",
        endPoint: "/profile",
        token,
      });

      if (response.status) {      
        dispatch(setProfile({isLoggedIn:response.status, user:response.data as Client}));
      } else if (
        response.status === false &&
        response.data.isExpired === true
      ) {
        localStorage.removeItem("sync-token");
        toast({
          title: response.message,
          description:
            "Your session token has expired. Please sign in to regain access.",
          status: "success",
          isClosable: true,
        });

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    };

    if (token && user.id === "") {
      getUserProfile();
    }
  }, [dispatch, toast, token, user.id]);

  return <>{children}</>;
};

export default ProfileProvider;
