import { auth } from "../services/firebase";

export async function SignUp(email, password, isTeacher) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const currentUser = auth().currentUser;
      console.log(user);
      currentUser
        .updateProfile({ role: isTeacher ? "teacher" : "student" })
        .catch((error) => console.log({ error }));
    });
}

///////////////////////////////////////////////////
export function SignIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

/* export default function Profile() {
  // 1. How to get a user's info to complete a profile
  return auth().currentUser.displayName;
} */

///////////////////////////////////////////////////
// 2. https://firebase.google.com/docs/auth/web/start
/* Attach the observer using the onAuthStateChanged method.
  When a user successfully signs in, you can get information 
  about the user in the observer. */

/* auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log({ user });
    // User is signed in.
    const displayName = user.displayName;
    const email = user.email;
    const isTeacher = user.isTeacher;
    const uid = user.uid;
    // ...
  } else {
    // User is signed out.
    console.log("no user");
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
