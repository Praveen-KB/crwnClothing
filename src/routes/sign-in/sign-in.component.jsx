import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utilities/firebase/firebase.utils";

const SignIn = () => {
  const log = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign iN</h1>
      <button onClick={log} type="button">
        sigh
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
