const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "Sign In":
      return true;
    default:
      return state;
  }
};
export default isLoggedIn;
