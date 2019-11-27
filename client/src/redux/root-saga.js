import { all, call } from "redux-saga/effects";

//List of all Sagas
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";


export default function* rootSaga() {
  //All starts all the Sagas concurrently.
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
