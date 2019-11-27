import UserActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});
export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});
export const signInFailure = errorMsg => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: errorMsg
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const emailSignUpStart = (userInfo) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_START,
  payload: userInfo
})

//This is suggested to be split out into multiple fields to make it more clear what the function is actually expecting. 
export const emailSignUpSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
  payload: user
})

export const emailSignUpFailure = (error) => ({
  type: UserActionTypes.EMAIL_SIGN_UP_FAILURE,
  payload: error
})