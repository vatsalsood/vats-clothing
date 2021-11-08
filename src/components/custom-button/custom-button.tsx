import React from "react";
import "./custom-button.scss";

interface CustomButtonProps {
  children: string;
  isGoogleSignIn: boolean;
}

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: CustomButtonProps) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
