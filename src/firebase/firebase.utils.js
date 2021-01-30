import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5H3PNsatfePZ5N0LRlb8v5yKQDCgt3yA",
  authDomain: "sleepercelll-web.firebaseapp.com",
  projectId: "sleepercelll-web",
  storageBucket: "sleepercelll-web.appspot.com",
  messagingSenderId: "477193796172",
  appId: "1:477193796172:web:08864695bfd9e32454d2e9",
  measurementId: "G-TGERGB0CN7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomerParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;