import { auth } from "../services/firebase";

export default function Profile() {
  // 1. How to get a user's info to complete a profile
  return auth().currentUser.displayName;
}

/*   // 2. How to update a user's profile
  user
    .updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
    .then(function () {
      // Update successful.
    })
    .catch(function (error) {
      // An error happened.
    }); */
