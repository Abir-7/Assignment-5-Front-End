import { baseApi } from "../baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonial/save-testimonial",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Testimonial"],
    }),
    getAllTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["Testimonial"],
    }),
  }),
});
export const { useAddTestimonialMutation, useGetAllTestimonialQuery } =
  testimonialApi;
