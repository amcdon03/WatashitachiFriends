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

// named exports - particular bits instead of the full FB app
export const auth = firebase.auth;
export const db = firebase.database();
