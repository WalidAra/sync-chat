/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosRequestConfig } from "axios";
import { Fetch, FetchResponse } from "../types/index";

export const useFetch = async ({
  endPoint = "/",
  method,
  body,
  token,
  feature,
}: Fetch) => {
  
  const header = import.meta.env.VITE_TOKEN_HEADER as string;
  const BASE_URL = import.meta.env.VITE_BASE_URL as string;

  const url = `${BASE_URL}api${feature}${
    token ? "/private" : "/public"
  }${endPoint}`;

  console.log('====================================');
  console.log(url);
  console.log('====================================');

  try {
    const axiosConfig: AxiosRequestConfig = {
      method: method.toUpperCase(),
      url: url,
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
      url + "\n\n",
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
