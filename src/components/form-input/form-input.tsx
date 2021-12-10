import React from "react";
import "./form-input.scss";

interface FormInputProps {
  type?: string;
  name?: string;
  handleChange: () => {};
  label: string;
  value: string;
}

const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {" "}
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
