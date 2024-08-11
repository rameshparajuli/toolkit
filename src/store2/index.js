import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./reducers/movies";
import cartReducer from "./reducers/cart";

const store = configureStore({
  devTools: true, // default true,
  trace: true, // default false prod me onn mat karna
  reducer: {
    movies: moviesReducer,
    cart: cartReducer,
  },
  //   middleware: function (previousMiddlewares) {
  //     // [...previousMiddlewares(), []];
  //     previousMiddlewares().concat([]);
  //     // you have to return a array from here
  //   },
  preloadedState: {},
});

export { store };
