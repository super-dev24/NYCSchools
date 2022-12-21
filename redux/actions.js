import axios from "axios";
import { BASE_URL, DETAIL_URL } from "../config";

export const GET_SCHOOLS = "GET_SCHOOLS";
export const GET_SCHOOL_DETAILS = "GET_SCHOOL_DETAIL";

export const get_schools = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${BASE_URL}`);
      if (response.data) {
        dispatch({
          type: GET_SCHOOLS,
          payload: response.data,
        });
      } else {
        console.log("Unable to fetch data from the API BASE URL!");
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const get_school_details = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${DETAIL_URL}`);
      if (response.data) {
        dispatch({
          type: GET_SCHOOL_DETAILS,
          payload: response.data,
        });
      } else {
        console.log("Unable to fetch data from the API DETAIL URL!");
      }
    };
  } catch (error) {
    console.log(error);
  }
};
