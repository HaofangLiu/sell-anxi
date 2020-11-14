import { UserActionType } from "./user-type";

const INITILA_STATE = {
  currentUser: null,
};

//Reducer
const userReducer = (state = INITILA_STATE, action) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
