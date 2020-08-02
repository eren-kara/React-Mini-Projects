import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";

import _ from "lodash";

const mapKeys = (array, key) => {
  let result = {};
  array.forEach((el) => {
    if (!result[el[key]]) {
      result[el[key]] = el;
    }
  });
  return result;
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(action.payload, "id") };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      let { [action.payload]: omit, ...res } = state; // It can be done with using loadash omit !
      return res;

    default:
      return state;
  }
};
