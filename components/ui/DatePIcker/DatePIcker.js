import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import style from "./DatePIcker.module.css";
// import "./DatePickerMain.css";

const CustomDatePicker = ({
  selectedDate,
  onChange,
  className,
  placeholderText,
  onBlur = () => {},
  onFocus = () => {},
  mandatory,
  disabled,
  divStyles,
  formatSpanStyles,
  name,
  colorTheme,
  errorMessage,
  isValid,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const datePickerRef = useRef(null);

  const handleLabelClick = () => {
    setIsFocused(true);
    datePickerRef.current.input.focus();
  };

  const handleDatePickerBlur = () => {
    setIsFocused(false);
  };

  const HandleFocus = () => {
    onFocus();
    handleLabelClick();
    // console.log(FormatSpanStyles);
  };

  const HandleBlur = () => {
    onBlur();
    handleDatePickerBlur();
  };

  // Function to format the date as "yyyy-MM-dd"

  const DivStyles = {
    ...divStyles,
    borderColor: colorTheme,
  };

  const FormatSpanStyles = {
    ...formatSpanStyles,
    backgroundColor: colorTheme,
    borderLeft: `1px solid ${colorTheme}`,
  };

  return (
    <div
      // style={{ width: "100%", minWidth: "" }}
      className={style.mainContainer}
    >
      <div className={style.container} style={DivStyles}>
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          dateFormat="yyyy-MM-dd"
          className={`${className} ${style.date}`}
          onFocus={HandleFocus}
          onBlur={HandleBlur}
          customInput={<input />}
          ref={datePickerRef}
          disabled={disabled}
          name={name}
        />
        <label
          className={`${
            isFocused || selectedDate ? style.transition : style.placeholder
          } transition-all`}
          onClick={() => setIsFocused(true)}
        >
          {placeholderText}{" "}
          {mandatory && <span style={{ color: "red" }}>&nbsp;*</span>}
        </label>
        <span className={style.format} style={FormatSpanStyles}>
          yyyy-mm-dd
        </span>
      </div>
      {
        <span
          className={`pl-2 text-red-500 ${
            !isValid && isFocused && errorMessage ? "opacity-100" : "opacity-0"
          }`}
        >
          {errorMessage}
        </span>
      }
    </div>
  );
};

export default CustomDatePicker;
