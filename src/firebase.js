import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKLNDr1pz4KlhmeVRxs5cb1qTCmB0zsiw",
  authDomain: "hci-quiz-dd353.firebaseapp.com",
  projectId: "hci-quiz-dd353",
  storageBucket: "hci-quiz-dd353.appspot.com",
  messagingSenderId: "237134167013",
  appId: "1:237134167013:web:3efb396391aa5d1c0c0d0c",
  measurementId: "G-NRE0L42TDE",
};

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
