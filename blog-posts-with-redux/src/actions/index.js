import api from "../apis/jsonPlaceholder";

export const fetchUsersAndPosts = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const Ids = getState().posts.map((post) => post.userId);
  const uniqueIds = [...new Set(Ids)];

  uniqueIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await api.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await api.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
