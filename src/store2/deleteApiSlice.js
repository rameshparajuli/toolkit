import apiSlice from "./apiSlice";

const deleteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      deleteTodo: builder.mutation({
        query: (id) => {
          return {
            url: `/todos/${id}`,
            method: "DELETE",
          };
        },
        onQueryStarted: function (id, { dispatch, queryFulfilled }) {
          const action = dispatch(
            apiSlice.util.updateQueryData(
              "getAllTodos",
              undefined,
              function (todos) {
                const newTodos = todos.filter((todo) => todo?.id !== id);
                return newTodos;
              }
            )
          );

          queryFulfilled.catch(() => {
            action.undo;
          });
        },
      }),
    };
  },
});

// not the recommended way
// const deleteApiSlice = createApi({
//   reducerPath: "todoDelete",

//   baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
//   endpoints: function (builder) {
//     return {
//       deleteTodo: builder.mutation({
//         query: (id) => {
//           return {
//             url: `/todos/${id}`,
//             method: "DELETE",
//           };
//         },
//         transformResponse: function (data) {
//           return data?.todos || [];
//         },
//       }),
//     };
//   },
// });
export const { useDeleteTodoMutation } = deleteApiSlice;
export default deleteApiSlice;
