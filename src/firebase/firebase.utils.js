import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBv1bhIXAg-8Dhm_wbZBjMQIQMDS1-BnLU",
  authDomain: "vats-clothing-db.firebaseapp.com",
  projectId: "vats-clothing-db",
  storageBucket: "vats-clothing-db.appspot.com",
  messagingSenderId: "1033657133506",
  appId: "1:1033657133506:web:fb0c4cbb98295fd1c94e5b",
  measurementId: "G-SS22RTW9VQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
