import { takeLatest, put, all, call } from "redux-saga/effects";
import { clearCart } from "./cart.actions";
import UserActionTypes from "../user/user.types";

export function* clearCartOnSignout() {
  console.log("clearcart");
  yield put(clearCart());
}

export function* onClearCart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
