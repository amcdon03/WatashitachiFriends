import { auth } from "../services/firebase";

export function SignUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function SignIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function setSchool(schoolName) {
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
}
export function setUserRole(isTeacher) {
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
}
