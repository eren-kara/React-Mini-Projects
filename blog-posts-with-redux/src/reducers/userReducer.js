export default (user = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...user, action.payload];
    default:
      return user;
  }
};
