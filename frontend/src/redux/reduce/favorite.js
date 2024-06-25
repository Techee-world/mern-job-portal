// Action types
const SET_WHITE = "SET_WHITE";
const SET_BLACK = "SET_BLACK";
const USER_ADD_TO_CART = "USER_ADD_TO_CART";
const USER_DISPLAY_TO_CART = "USER_DISPLAY_TO_CART";
const USER_REMOVE_FROM_CART = "USER_REMOVE_FROM_CART"; // New action type
const ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL";

const initialColorState = {
  color: "white",
};

const initialFavoriteState = {
  favoriteDataList: [],
  displayFavoriteData: [],
};


export const colorReducer = (state = initialColorState, action) => {
  switch (action.type) {
    case SET_WHITE:
      return { ...state, color: "white" };
    case SET_BLACK:
      return { ...state, color: "black" };
    default:
      return state;
  }
};


export const favoriteDataReducer = (state = initialFavoriteState, action) => {
  switch (action.type) {
    case USER_ADD_TO_CART:
      return {
        ...state,
        favoriteDataList: [...state.favoriteDataList, action.payload],
      };
    case USER_DISPLAY_TO_CART:
      return {
        ...state,
        displayFavoriteData: action.payload,
      };
    case USER_REMOVE_FROM_CART:
      return {
        ...state,
        displayFavoriteData: state.favoriteDataList.filter(
          (item) => item._id !== action.payload
        ),
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
