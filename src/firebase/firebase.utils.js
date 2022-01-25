import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { signInWithPopup } from 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA2u2h34eh0hGEXTQXlY5mw6mU2bjdXtQs",
  authDomain: "ecommerce-db-reactredux.firebaseapp.com",
  projectId: "ecommerce-db-reactredux",
  storageBucket: "ecommerce-db-reactredux.appspot.com",
  messagingSenderId: "349207307435",
  appId: "1:349207307435:web:74bfb8dc42466704b443ee",
  measurementId: "G-61S3YDL997"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;