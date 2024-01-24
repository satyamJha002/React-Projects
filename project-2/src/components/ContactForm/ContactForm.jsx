import React, { useState } from "react";

import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (event) => {
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setMessage(event.target[2].value);

    console.log(name, email, message);
    event.preventDefault();
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={20} />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize={20} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL"
          icon={<HiOutlineMail fontSize={20} />}
        />
        <form action="" onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="Name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="Email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea id="message" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
          <div>{name + " " + email + " " + message}</div>
        </form>
      </div>
      <div className={styles.contact_img}>
        <img src="/images/contact-img.svg" />
      </div>
    </section>
  );
};

export default ContactForm;
