import React from "react";
import "./Button.scss";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: "outline" | "danger";
  size?: "sm";
  submit?: boolean
};

const Button = ({ onClick, children, variant, size, submit }: ButtonProps) => {
  const classes = ["button", variant ? `${variant}` : "", size ? `${size}` : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={submit ? "submit" : "button"} onClick={onClick} className={`btn ${classes}`}>
      {children}
    </button>
  );
};

export default Button;
