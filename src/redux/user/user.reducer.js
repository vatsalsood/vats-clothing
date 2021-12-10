const INITIAL_STATE = {
  currentUser: null,
};

// state is the current state passed from the store whenever an action is fired
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, cuurentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
