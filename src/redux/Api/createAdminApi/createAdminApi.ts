import { baseApi } from "../baseApi";

const createAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/user/create-admin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useCreateAdminMutation } = createAdminApi;
