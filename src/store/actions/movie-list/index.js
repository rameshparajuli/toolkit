// action creators

import * as actions from "../../constants/movie-list";

export const updateLoader = (value) => {
  return {
    type: actions.UPDATE_LOADER,
    value,
  };
};

export const updateError = (value) => {
  return {
    type: actions.UPDATE_ERROR,
    value,
  };
};

export const responseRecevied = (value) => {
  return {
    type: actions.UPDATE_DATA,
    value,
  };
};

export const addToCart = (value) => {
  return { type: actions.UPDATE_CART, value };
};

// from component

export const updateData = (value) => {
  return {
    type: actions.UPDATE_DATA,
    value,
  };
};

export const removeFromCart = (value) => {
  return {
    type: "REMOVE_CART",
    value,
  };
};

function fakeAxios() {
  return new Promise((res) => {
    setTimeout(() => {
      res({ msg: "Data from Fake Axios", action: responseRecevied() });
    }, 3000);
  });
}
