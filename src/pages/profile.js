import { auth, db, functions } from "../services/firebase";

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

  /**
   * Creates a document with ID -> uid in the `Users` collection.
   *
   * @param {Object} userRecord Contains the auth, uid and displayName info.
   * @param {Object} context Details about the event.
   */

  const createProfile = (userRecord) => {
    const { email, name, uid } = userRecord;

    return db
      .collection("Users")
      .doc(uid)
      .set({ email, name })
      .catch(console.error);
  };

  module.exports = {
    authOnCreate: functions.auth.user().onCreate(createProfile),
  };
}
