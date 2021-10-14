import React from "react";
import "./custom-button.scss";

interface CustomButtonProps {
  children: string;
}

const CustomButton = ({ children, ...otherProps }: CustomButtonProps) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
