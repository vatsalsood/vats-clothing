import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import "./sign-in-sign-out.scss";

const SigninSignout = () => {
  return (
    <div className="sign-in-sign-out">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninSignout;
