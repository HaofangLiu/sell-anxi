import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'login_hint': "user@example.com" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
