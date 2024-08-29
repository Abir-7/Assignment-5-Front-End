import { baseApi } from "../baseApi";

const createUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/user/create-admin",
        method: "POST",
        body: data,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useCreateAdminMutation, useCreateUserMutation } = createUserApi;
