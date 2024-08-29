import { baseApi } from "../baseApi";

const bookingAApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsersBooking: builder.query({
      query: () => ({
        url: "/bookings/user",
        method: "GET",
      }),
    }),
    getAllBooking: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["Booking"],
    }),
    cencelBooking: builder.mutation({
      query: (id: string) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Booking"],
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
  useGetAllBookingQuery,
} = bookingAApi;
