import { GET_SCHOOLS, GET_SCHOOL_DETAILS } from "./actions";

const initialState = {
  schools: [],
  details: [],
};

const schools_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SCHOOLS:
      return { ...state, schools: action.payload };

    case GET_SCHOOL_DETAILS:
      return { ...state, details: action.payload };

    default:
      return state;
  }
};

export default schools_reducer;
