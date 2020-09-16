import { auth } from "../services/firebase";

export function SignUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function SignIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}
///////////////////////////////////////////////////
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
