import { GET_MEASUREMENTS } from "../actions";

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MEASUREMENTS:
      // Convert time in each obj from epoch to hrs/min/sec
      // let measurements = action.payload

      // measurements.forEach((obj) => {
      //   let time = new Date(obj.at).toLocaleTimeString("en-US");
      //   obj.at = time;
      //   console.log(obj.at);
      // });

      return action.payload;
    default:
      return state;
  }
};