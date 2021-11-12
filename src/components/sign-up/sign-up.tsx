// @ts-nocheck
import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";

interface SignUpStateProps {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface SignUpProps {}

class SignUp extends React.Component<SignUpProps, SignUpStateProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">
          <span>
            <form onSubmit={this.handleSubmit} className="sign-up-form">
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={this.handleChange}
                label="Email"
                required
              ></FormInput>
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
              ></FormInput>
              <FormInput
                type="password"
                name="Password"
                onChange={this.handleChange}
                value={password}
                label="Password"
                required
              ></FormInput>
              <FormInput
                type="password"
                name="ConfirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                value={confirmPassword}
                label="Confirm Password"
                required
              ></FormInput>
              <CustomButton type="submit">Sign up</CustomButton>
            </form>
          </span>
        </h2>
      </div>
    );
  }
}

export default SignUp;
