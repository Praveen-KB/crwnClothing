import { initializeApp } from "firebase/app";
import {
  getAuth,
  //   signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQP7zkNy9U7pDqNeweTdWasmDcvJdbHRg",
  authDomain: "praveen-crwn-db.firebaseapp.com",
  projectId: "praveen-crwn-db",
  storageBucket: "praveen-crwn-db.appspot.com",
  messagingSenderId: "988193260401",
  appId: "1:988193260401:web:49b50bb490648d3903ecd0",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};
