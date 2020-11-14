import { takeEvery, call, put } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fetchCollectionFailure } from "../shop/shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollcetionStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONC_START,
    fetchCollectionsAsync
  );
}
