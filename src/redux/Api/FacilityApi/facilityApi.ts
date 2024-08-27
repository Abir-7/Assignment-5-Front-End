import { baseApi } from "../baseApi";

const bookingAApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (data) => ({
        url: "/facility",
        method: "POST",
        body: data,
      }),
    }),
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
    updateFacility: builder.mutation({
      query: (data) => ({
        url: `/facility/${data.id}`,
        method: "PUT",
        body: data.data,
      }),
    }),
    deleteFacility: builder.mutation({
      query: (data) => {
        return { url: `/facility/${data.id}`, method: "DELETE" };
      },
    }),

    checkAvailability: builder.query({
      query: (arg: { name: string; value: string }[]) => {
        const params = new URLSearchParams();
        if (arg) {
          arg.forEach((element) => {
            params.append(element.name, element.value);
          });
        }
        return {
          url: `/check-availability`,
          method: "GET",
          params: params,
        };
      },
    }),
    bookingFacility: builder.mutation({
      query: (data) => ({
        url: `bookings`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetAllFacilityQuery,
  useGetSingleFacilityQuery,
  useCheckAvailabilityQuery,
  useLazyCheckAvailabilityQuery,
  useBookingFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useCreateFacilityMutation,
} = bookingAApi;
