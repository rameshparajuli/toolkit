import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// dispatch(fetchCart(params))

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  function (one, specialObject) {
    // this should always return a promise
    console.log(one, specialObject);
    // why?
    // because slice uses the promise states to update the store.

    return fakeAxios();
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: {} },
  reducers: {
    updateCart: function (state, action) {
      console.log("1");
      const value = action.payload;
      const key = value["href"];

      if (state?.cart[key]?.count) {
        state.cart[key].count += 1;
      } else {
        state.cart[key] = {};
        state.cart[key].count = 1;
        state.cart[key].value = value;
      }
    },
  },
  extraReducers: function (builder) {
    builder.addCase("movies/action", function (state, action) {
      // update
    });

    builder.addCase(fetchCart.pending, function (state, action) {
      state.isFetchingCart = true;
    });

    builder.addCase(fetchCart.fulfilled, function (state, action) {
      state.dataFromAxios = action.payload;
      state.isFetchingCart = false;
    });

    builder.addCase(fetchCart.rejected, function (state, action) {
      state.errorFromAxios = action.payload;
      state.isFetchingCart = false;
    });
  },
  //   extraReducers: {
  //     'movies/car': ()=> {}
  //   }
});
console.log(cartSlice.actions);
export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;

function fakeAxios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("From Fake Axios");
    }, 3000);
  });
}
