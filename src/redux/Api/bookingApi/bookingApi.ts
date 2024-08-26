import { baseApi } from "../baseApi";

const bookingAApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsersBooking: builder.query({
      query: () => ({
        url: "/bookings/user",
        method: "GET",
      }),
    }),
    cencelBooking: builder.mutation({
      query: (id: string) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
    }),
    getSingleBookingData: builder.query({
      query: (id: string) => ({
        url: `/bookings/user/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUsersBookingQuery,
  useCencelBookingMutation,
  useGetSingleBookingDataQuery,
} = bookingAApi;
