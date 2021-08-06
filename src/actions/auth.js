import { types } from "../types/types";

export const startloginEmailPassword = (email, password) => {
  return (dispatch) => {

    setTimeout(() => {
      dispatch(login(123, 'adrian'))
    }, 3500)

  }
} 

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
