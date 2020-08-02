import streams from "../apis/streams";
import { useCallback } from "react";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

import history from "../history";

export const signIn = (id) => {
  return {
    type: SIGN_IN,
    payload: { id },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userID } = getState().auth;

  const response = await streams.post("/streams", { ...formValues, userID });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  if (response.status === 201) {
    history.push("/");
  }
};

export const fetchStreams = () => async (dispatch) => {
  const { data } = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: data });
};

export const fetchStream = (id) => async (dispatch) => {
  const { data } = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};

export const editStream = (id, formValues) => async (dispatch) => {
  const { data } = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: data });
  history.push("/");
};
