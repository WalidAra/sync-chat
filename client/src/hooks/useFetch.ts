/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosRequestConfig } from "axios";
import { Fetch, FetchResponse } from "../types/index";

export const useFetch = async ({
  endPoint = "/",
  method,
  body,
  token,
  feature
}: Fetch) => {

  const header = import.meta.env.VITE_TOKEN_HEADER as string;
  const BASE_URL = import.meta.env.VITE_BASE_URL as string;

  try {
    const axiosConfig: AxiosRequestConfig = {
      method: method.toUpperCase(),
      url: BASE_URL + feature + (token ? "/private" : "/public") + endPoint,
      headers: {
        "Content-Type": "application/json",
        ...(token && { [header]: token }),
      },
      data: body,
    };

    const response = await axios(axiosConfig);
    return response.data as FetchResponse;
  } catch (error: any) {
    
    console.log("====================================");
    console.error(
      `\n====> Error Fetch at : \n ` + "\nurl :",
      BASE_URL + (token ? "/private" : "/public") + endPoint + "\n\n",
      error.message,
      "\n"
    );
    console.log("====================================");

    return {
      status: false,
      message: "Internal server error",
      data: null,
    };
  }
};
