import { UserActionType } from "./user-type";

export const setUser = (user) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});
