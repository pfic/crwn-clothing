import { all, call } from "redux-saga/effects";

//List of all Sagas
import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";


export default function* rootSaga() {
  //All starts all the Sagas concurrently.
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
