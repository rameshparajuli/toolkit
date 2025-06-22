import { createApi } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        queryFn: () => {
          return { data: "Data from slice" };
        },
      }),
    };
  },
});
export const { useGetAllTodosQuery } = apiSlice;
export default apiSlice;
