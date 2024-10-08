/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { toast } from "sonner";
import { logout } from "../feature/userSlice/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://assignment-5-back-end-tawny.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, api) => {
    const { token } = (api.getState() as RootState).authData;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  BaseQueryApi,
  object
> = async (args, api, extraOptions): Promise<any> => {
  const result: any = await baseQuery(args, api, extraOptions);
  if (result.error) {
    toast.error(result.error.data.message);
  }

  if (result.error?.status === 401) {
    // const res = await fetch("http://localhost:3000/api/v1/auth/refresh-token", {
    //   method: "POST",
    //   credentials: "include",
    // });
    // const data = await res.json();

    // if (data?.success && data?.data?.accessToken) {
    //   const user = (api.getState() as RootState).authData.user;
    //   api.dispatch(setUser({ user, token: data.data.accessToken }));

    //   result = await baseQuery(args, api, extraOptions);
    // } else {
    //   api.dispatch(logout());
    // }
    // console.log(data);
    api.dispatch(logout());
    toast.success("User Logout");
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
  tagTypes: ["Facility", "Booking", "Testimonial", "User"],
});
