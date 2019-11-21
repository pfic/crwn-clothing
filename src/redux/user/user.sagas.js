import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  emailSignUpFailure,
  emailSignUpSuccess
} from "./user.actions";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: email, password }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
//This is the listener fo rthe call, and when it finds it, it triggers somethign else.
export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutStart() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutStart);
}

export function* emailSignUpStart({
  payload: { email, password, displayName }
}) {
  //Code to start the sign up here.

  try {
    console.log("email", email);
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield createUserProfileDocument(user, { displayName });
    yield put(emailSignUpSuccess(user));
    //yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(emailSignUpFailure(error.message));
  }
}

export function* onEmailSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, emailSignUpStart);
}

export function* emailSignUpLogin({ payload: user }) {
  //Code to start the sign up here.

  try {
    console.log("Got to the right place.");
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onEmailSignUpSuccess() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_SUCCESS, emailSignUpLogin);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onEmailSignUpStart),
    call(onEmailSignUpSuccess)
  ]);
}
