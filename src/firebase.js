import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvqLmOiJki_5MzYt8OEruFbCPA84WhhiQ",
  authDomain: "fir-16c56.firebaseapp.com",
  projectId: "fir-16c56",
  storageBucket: "fir-16c56.appspot.com",
  messagingSenderId: "656357326892",
  appId: "1:656357326892:web:6fee037517ae451e961189",
  measurementId: "G-1ELQTLBYNM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
