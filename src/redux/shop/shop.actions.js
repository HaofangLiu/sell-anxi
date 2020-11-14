import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONC_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONC_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (err) => ({
  type: ShopActionTypes.FETCH_COLLECTIONC_FAILURE,
  payload:err
})

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef.get().then((snapshop) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshop);
      dispatch(fetchCollectionSuccess(collectionMap));
    }).catch(e => {
      dispatch(fetchCollectionFailure(e))
    })
  };
};
