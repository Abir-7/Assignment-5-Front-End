import { baseApi } from "../baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonial/save-testimonial",
        method: "POST",
        body: data,
      }),
    }),
    getAllTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
    }),
  }),
});
export const { useAddTestimonialMutation } = testimonialApi;
