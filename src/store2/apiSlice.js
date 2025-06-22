import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "todoGet",
  //   keepUnusedDataFor: 20,   // keep data till seconds

  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["AddTodo", "GetAllTodoTag"],
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        query: () => {
          return `/todos`;
        },
        providesTags: ["GetAllTodoTag"],
        // keepUnusedDataFor: 20,  // we can keep on individual
        transformResponse: function (data) {
          return data?.todos || [];
        },
      }),
      getTodo: builder.query({
        query: (id) => {
          return `/todos/${id}`;
        },
      }),

      addTodo: builder.mutation({
        query: (params) => {
          return {
            url: `/todos/add`,
            method: "POST",
            body: params,
          };
        },
        invalidatesTags: ["GetAllTodoTag"],
      }),
    };
  },
});
export const { useGetAllTodosQuery, useAddTodoMutation, useLazyGetTodoQuery } =
  apiSlice;
export default apiSlice;
