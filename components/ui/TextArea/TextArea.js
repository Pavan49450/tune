import React, { useEffect, useRef, useState } from "react";
import styles from "./CustomTextArea.module.css"; // Import the CSS Module

const CustomTextArea = React.forwardRef(
  (
    {
      placeholder,
      // value,
      // onChange,
      // onBlur = () => {},
      // onFocus = () => {}
      // ,
      inputFields,
      className,
      style,
      mandatory, // Add a prop to indicate if the input is mandatory
      name,
      colorTheme,
      rows = 3, // Number of visible text lines
    },
    ref
  ) => {
    // Combine the provided className with the CSS module className
    const combinedClassName = `${styles.textarea} ${className}`;

    // Add the mandatorySign class conditionally
    const textareaClasses = mandatory
      ? `${combinedClassName} ${styles.mandatorySign}`
      : combinedClassName;

    useEffect(() => {
      if (inputFields.value && inputFields.value.trim() === "") {
        setIsTouched(false);
      }
    }, [inputFields.value]);

    const textareaRef = useRef();

    const [isTouched, setIsTouched] = useState(false);

    const handleTextareaFocus = () => {
      setIsTouched(true);
    };

    const handleTextareaBlur = () => {
      setIsTouched(false);
    };

    const handleLabelClick = () => {
      textareaRef.current.focus();
    };

    const textareaStyles = {
      ...style,
      borderColor: colorTheme,
    };

    const handleFocus = () => {
      inputFields.focusHandler();
      handleTextareaFocus();
    };

    const handleBlur = () => {
      // onBlur();
      inputFields.validateValueHandler();
      handleTextareaBlur();
    };

    return (
      <div style={{ position: "relative" }}>
        <textarea
          ref={textareaRef}
          className={textareaClasses}
          // placeholder={placeholder || ""}
          name={name}
          value={inputFields.value}
          onChange={inputFields.valueChangeHandler}
          style={textareaStyles} // Don't wrap style in another object
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
        />
        <label
          className={` ${
            isTouched || inputFields.value !== ""
              ? styles.transition
              : styles.placeholder
          } transition-all `}
          onClick={handleLabelClick}
        >
          {placeholder}{" "}
          {mandatory && <span style={{ color: "red" }}>&nbsp;*</span>}
        </label>
      </div>
    );
  }
);

// Set the display name for the component
CustomTextArea.displayName = "CustomTextArea";

export default CustomTextArea;
