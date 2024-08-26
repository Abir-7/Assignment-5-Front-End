import { baseApi } from "../baseApi";

const bookingAApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
    }),
    getSingleFacility: builder.query({
      query: (id: string) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllFacilityQuery, useGetSingleFacilityQuery } =
  bookingAApi;
