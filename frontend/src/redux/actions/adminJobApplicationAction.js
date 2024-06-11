import axios from "axios";

export const SET_JOB_FORM_DATA = "SET_JOB_FORM_DATA";
export const RESET_JOB_FORM_DATA = "RESET_JOB_FORM_DATA";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const SET_JOB_LIST_DATA = "SET_JOB_LIST_DATA";


// Action to set job form data and make an API call to register
export const setJobFormDataAction = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/admin/adminJobApplication",
      formData
    );
    dispatch({
      type: SET_JOB_FORM_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.message,
    });
  }
};

// Action to reset job form data
export const fetchJobListData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/admin/adminJobApplication"
    );
    dispatch({
      type: SET_JOB_LIST_DATA,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response?.data?.message || "Something went wrong",
    });
  }
};

