import { auth, db, functions } from "../services/firebase";

// 1. How to get a user's profile
const user = auth().currentUser;
let name, email, photoURL, emailVerified, uid;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoURL = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;
}

// 2. How to update a user's profile
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
  });

///////////////////////////////////////////////////////////////////////////
/**
 * Creates a FireSTORE document with ID -> uid in the `Users` collection.
 *
 * @param {Object} userRecord Contains the auth, uid and displayName info.
 * @param {Object} context Details about the event.
 */

/* const createProfile = (userRecord) => {
    const { email, name, uid } = userRecord;

    return db
      .collection("Users")
      .doc(uid)
      .set({ email, name })
      .catch(console.error);
  };

  module.exports = {
    authOnCreate: functions.auth.user().onCreate(createProfile),
  }; */
