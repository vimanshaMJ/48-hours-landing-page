import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./PrimaryButton.module.css";

export default function PrimaryButton({ buttonText, className, ...props }) {
  return (
    <div>
      <Button
        variant="primary"
        className={`${classes.actionBtn} ${className}`}
        {...props}
      >
        {buttonText}
      </Button>{" "}
    </div>
  );
}
