import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        query: (id) => {
          return `/todos`;
        },
        transformResponse: function (data) {
          return data?.todos || [];
        },
      }),
      getTodo: builder.query({
        query: (id) => {
          return `/todos/${id}`;
        },
      }),
    };
  },
});
export const { useGetAllTodosQuery } = apiSlice;
export default apiSlice;
