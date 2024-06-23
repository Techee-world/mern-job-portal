import axios from "axios";

const SET_WHITE = "SET_WHITE";
const SET_BLACK = "SET_BLACK";
const USER_ADD_TO_CART = "USER_ADD_TO_CART";
const ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL";

export const setWhite = () => ({
  type: SET_WHITE,
});

export const setBlack = () => ({
  type: SET_BLACK,
});

export const setFavoriteData = (favoriteData) => async (dispatch) => {
  try {
    console.log("Sending favorite data:", favoriteData);
    const res = await axios.post(
      "http://localhost:5000/api/user/userFavorite",
      favoriteData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response data:", res.data);
    dispatch({
      type: USER_ADD_TO_CART,
      payload: res.data,
    });
  } catch (err) {
    console.error("Error response:", err.response);
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: err.response ? err.response.data : "Unknown error",
    });
  }
};
