// src/redux/actions/authActions.js
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      userData
    );
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "REGISTER_FAIL",
      payload: err.response.data.message,
    });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      userData
    );
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: err.response.data,
    });
  }
};
