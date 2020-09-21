import { auth } from "../services/firebase";

export function SignUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

///////////////////////////////////////////////////
export function SignIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export default function Profile() {
  // 1. How to get a user's info to complete a profile
  return auth().currentUser.displayName;
}

///////////////////////////////////////////////////
// 2. https://firebase.google.com/docs/auth/web/start
/* Attach the observer using the onAuthStateChanged method.
  When a user successfully signs in, you can get information 
  about the user in the observer.
  
  auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    const providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
}); */

export function SchoolName(schoolName) {
  const user = auth().currentUser;

  user
    .updateProfile({
      schoolName: schoolName,
    })
    .then(function () {
      // Update successful.
    })
    .catch(function (error) {
      console.log(error);
      // An error happened.
    });

  return schoolName;
}
//////////////////////////////////////////////////
export function UserRole(isTeacher) {
  const user = auth().currentUser;

  user
    .updateProfile({
      isTeacher: isTeacher,
    })
    .then(function () {
      // Update successful.
    })
    .catch(function (error) {
      console.log(error);
      // An error happened.
    });

  return isTeacher;
}
//////////////////////////////////////////////////
export function Logout() {
  return auth().signOut();
}
