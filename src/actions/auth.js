import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { uiStartLoading } from './ui';
import { uiFinishLoading } from './ui';


export const startloginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading())
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( ({ user }) => {
      dispatch(
        login(user.uid, user.displayName)
      )
      dispatch(uiFinishLoading())
    })
    .catch( e => {
      console.log(e);
      dispatch(uiFinishLoading())
    })
    dispatch(login(email, password));
  }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) =>  {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( async ({ user }) => {
      await user.updateProfile( {displayName: name});
      console.log(user);
      dispatch(
        login(user.uid, user.displayName)
      )
    })
    .catch( e => {
      console.log(e);
    })
  }
}


export const startGoogleLogin = () => {
  return ( dispatch ) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
      .then( ({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      })
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startRegister = () => {
  return dispatch => {

  }
};
