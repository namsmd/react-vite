import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseConfig = {
  apiKey: "AIzaSyBNG5Gay9Ft3oRA9Ysv5IB9lprATZ8c_mY",
  authDomain: "imi-server.firebaseapp.com",
  databaseURL: "https://imi-server.firebaseio.com",
  projectId: "imi-server",
  storageBucket: "imi-server.appspot.com",
  messagingSenderId: "162776018644",
  appId: "1:162776018644:web:9da5bac3fd0e491334d541",
  measurementId: "G-VYXW4H7089",
};

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful.
  // Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/app",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

export const firebaseAuth = firebase.auth();
export const FirebaseAuthUI = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
);
