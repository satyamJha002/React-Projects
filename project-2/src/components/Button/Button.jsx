import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  const { isOutline, text, icon } = props;
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
