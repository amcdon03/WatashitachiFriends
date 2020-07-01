import firebase from 'firebase';

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCNMecyIS5i9RFHUWfSfmt4lOu1U3e63jc',
  authDomain: 'fren-zing.firebaseapp.com',
  databaseURL: 'https://fren-zing.firebaseio.com',
  projectId: 'fren-zing',
  storageBucket: 'fren-zing.appspot.com',
  messagingSenderId: '80324251261',
  appId: '1:80324251261:web:23c970e6ddd50bb39eab14',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
