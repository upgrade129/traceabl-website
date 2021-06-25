import firebase from "firebase";
import "firebase/storage";
import "firebase/functions";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvCl2R5gD2VCiHlhNEiHh3SjKpp1Y2eIw",
  authDomain: "traceabl.firebaseapp.com",
  projectId: "traceabl",
  storageBucket: "traceabl.appspot.com",
  messagingSenderId: "259750941708",
  appId: "1:259750941708:web:1029c335e9362151118a29",
  measurementId: "G-Q3MYMFBMLF"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.functions();
const storage = firebase.storage();
const functions = firebase.functions();
const auth = firebase.auth();
export { firebase, storage, functions, auth };
