import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
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
    </div>
  );
};

export default SignIn;
