// Action types
const SET_WHITE = "SET_WHITE";
const SET_BLACK = "SET_BLACK";
const USER_ADD_TO_CART = "USER_ADD_TO_CART";

// Initial states
const initialColorState = {
  color: "white",
};

const initialFavoriteState = {
  favoriteDataList:[],
};

// Color reducer
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

// Favorite data reducer
export const favoriteDataReducer = (state = initialFavoriteState, action) => {
  switch (action.type) {
    case USER_ADD_TO_CART:
        return {
          ...state,
          favoriteDataList: [...state.favoriteDataList, action.payload],
        };
    default:
      return state;
  }
};
