import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBozNgSPouDB-Y3cOXEXsD7taUZIrJDvg4",
  authDomain: "clone-82377.firebaseapp.com",
  projectId: "clone-82377",
  storageBucket: "clone-82377.appspot.com",
  messagingSenderId: "72884213192",
  appId: "1:72884213192:web:9f2dd04d09235833635cfd",
  measurementId: "G-4F649LD27G",
});

const auth = firebase.auth();

export { auth };
