import { useState } from "react";
import "./sign-up-form.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  auth,
} from "../../utilities/firebase/firebase.utils";

import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFeilds;

  //   console.log(formFeilds);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };

  console.log(typeof password);

  const resetFormFeild = () => {
    setFormFeilds(defaultFormFields);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (!(password === confirmPassword)) {
      alert("Password Do Not Match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const newUser = { displayName, email, uid: user.uid };
      const userDocRef = await createUserDocumentFromAuth(newUser);
      resetFormFeild();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't Have an Account</h2>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          value={displayName}
          name="displayName"
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
