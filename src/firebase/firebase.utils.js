import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useRef } from "react";

const config = {
  apiKey: "AIzaSyBOAWAZ9aPULLsyWYBeDt__SUt2hxMhQXU",
  authDomain: "sell-anxi.firebaseapp.com",
  databaseURL: "https://sell-anxi.firebaseio.com",
  projectId: "sell-anxi",
  storageBucket: "sell-anxi.appspot.com",
  messagingSenderId: "234244227689",
  appId: "1:234244227689:web:a5c35221df3fd101e1d8f8",
  measurementId: "G-719JZGX4F7",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;
  //queryReference --> documentRef returns a documentSnapshot
  //querySnapshop -->  collectionRef returns a querySnapshop

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();

  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...addtionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ login_hint: "user@example.com" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
