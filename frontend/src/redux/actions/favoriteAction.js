import axios from "axios";

const SET_WHITE = "SET_WHITE";
const SET_BLACK = "SET_BLACK";
const USER_ADD_TO_CART = "USER_ADD_TO_CART";
const USER_DISPLAY_TO_CART = "USER_DISPLAY_TO_CART";
const ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL";
const USER_REMOVE_FROM_CART = "USER_REMOVE_FROM_CART"; // New action type

export const setWhite = () => ({
  type: SET_WHITE,
});

export const setBlack = () => ({
  type: SET_BLACK,
});

export const setFavoriteData = (favoriteData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/user/userFavorite",
      favoriteData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: USER_ADD_TO_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: err.response ? err.response.data : "Unknown error",
    });
  }
};

export const displayFavoriteData = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/user/userFavorite");
    dispatch({
      type: USER_DISPLAY_TO_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: err.response?.data?.message || "Failed to fetch favorite data",
    });
  }
};

export const removeFavoriteData = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/user/userFavorite/${id}`);
    dispatch({
      type: USER_REMOVE_FROM_CART,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: err.response?.data?.message || "Failed to remove favorite data",
    });
  }
};
