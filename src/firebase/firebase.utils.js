import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5cPSqn_nwspi2gSIpib4FECIKMQMabcs",
  authDomain: "crwn-clothing-5ccb2.firebaseapp.com",
  databaseURL: "https://crwn-clothing-5ccb2.firebaseio.com",
  projectId: "crwn-clothing-5ccb2",
  storageBucket: "crwn-clothing-5ccb2.appspot.com",
  messagingSenderId: "45614455010",
  appId: "1:45614455010:web:6191c51eb7cd9cccd726bb",
  measurementId: "G-EGRPXRTHM3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //See if the document existsin the firestore
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
    userRef.set();
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
