"use client";
import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  className,
  style,
  disabled,
  doNotScrollToTop,
}) => {
  const combinedClassName = `${className} ${
    !disabled ? styles.customButton : styles.disabledBtn
  } `;

  const handleClick = () => {
    if (doNotScrollToTop) return;
    window.scrollTo(0, 0);
  };

  return (
    <button
      className={combinedClassName}
      disabled={disabled}
      onClick={(event) => {
        handleClick();
        if (onClick) onClick(event);
      }}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
