import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCCSspPlcPvQkIIdcR7pCaWxkADZd7Lw6Y",
  authDomain: "watashinofriends.firebaseapp.com",
  databaseURL: "https://watashinofriends.firebaseio.com",
  projectId: "watashinofriends",
  storageBucket: "watashinofriends.appspot.com",
  messagingSenderId: "176115548449",
  appId: "1:176115548449:web:4d683a7ac4e60fa375fe60",
  measurementId: "G-BY0LSKCRDX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
export const functions = firebase.functions;
export const admin = firebase.admin;

/* var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://watashinofriends.firebaseio.com",
});
 */
