import { configureStore } from "@reduxjs/toolkit";

import apiSlice from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (prevMiddlewares) =>
    prevMiddlewares().concat([apiSlice.middleware]),
});

setupListeners(store.dispatch);

export { store };
