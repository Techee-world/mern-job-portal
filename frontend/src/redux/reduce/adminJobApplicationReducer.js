import {
  SET_JOB_FORM_DATA,
  RESET_JOB_FORM_DATA,
  REGISTER_FAIL,
  SET_JOB_LIST_DATA,
} from "../actions/adminJobApplicationAction";

const initialState = {
  jobId: "",
  jobTitle: "",
  companyName: "",
  location: "",
  salaryRange: "",
  maxExperience: "",
  jobDescription: "",
  responsibilities: "",
  requirements: "",
  applicationDeadline: "",
  datePosted: "",
  dateUpdated: "",
  jobType: {
    partTime: false,
    fullTime: false,
    hybrid: false,
    remote: false,
    internship: false,
  },
  jobList: [],
  jobFormData: {}, // Initialize jobFormData in the state
  error: null, // Add error field to the initial state
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOB_FORM_DATA:
      return {
        ...state,
        jobFormData: action.payload,
      };
    case SET_JOB_LIST_DATA:
      return {
        ...state,
        jobList: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_JOB_FORM_DATA:
      return initialState;
    default:
      return state;
  }
};

export default jobReducer;
