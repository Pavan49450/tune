import React, { useState, useEffect } from "react";
import styles from "./Message.module.css"; // Import modular CSS
import CustomImage from "../Image/Image";
// import { MdClose } from "react-icons/md"; // Import close icon from react-icons

const Message = ({ message, type, onClose, dontClose, time }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!dontClose) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, time * 1000 || 4045645600);
      return () => clearTimeout(timer);
    }
  }, [onClose, dontClose, time]);

  return (
    <div className={styles.overlay}>
      <div
        className={`${styles.message} ${styles[type]} ${
          show ? styles.show : ""
        }`}
      >
        <span
          onClick={onClose}
          className={`hover:scale-125 transition-all ${styles.popupClose}`}
        >
          <CustomImage
            src="/assets/icons/close.png"
            width={25}
            height={25}
          ></CustomImage>
        </span>
        <div className={styles.messageContainer}>
          <div className="flex gap-4 items-center">
            <CustomImage
              src="/assets/icons/thankyou.png"
              width={68}
              height={68}
            ></CustomImage>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
