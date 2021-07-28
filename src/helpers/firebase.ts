import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyAKrKqHKeLprlLbC6jdd53aJQ9bzSV8W1w",
  authDomain: "speedy-solstice-319505.firebaseapp.com",
  projectId: "speedy-solstice-319505",
  storageBucket: "speedy-solstice-319505.appspot.com",
  messagingSenderId: "502470576000",
  appId: "1:502470576000:web:7e83717481d1c404322365",
});

export const firebaseAuth = firebase.auth();
