import { auth } from "../services/firebase";

export default function Profile() {
  const user = auth().currentUser;
  let name, email, photoURL, emailVerified, uid;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoURL = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }
}

/* let user = auth().currentUser
if let user = user {
  let uid = user.uid
  let email = user.email
  let photoURL = user.photoURL
  // ... */
