import React, { useRef } from "react";
import "../App.css";
import classes from "./Contact.module.css";
import { questions } from "../data/FreqAskedQuestion";
import SingleQuestion from "../components/SingleQuestion";
import transitionMain from "../UI/Transitions";
import { motion } from "framer-motion";

const Contact = (props) => {
  const nameRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const schoolmsg = {
      name: nameRef.current.value,
      Telephone: telRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    props.onSendmsg(schoolmsg);
  };

  return (
    <motion.div
      className={classes.contact}
      variants={transitionMain}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={classes.frequent}>
        <h3>Frequently Asked Questions</h3>
        <div>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </div>
      </div>

      <div className={classes.address}>
        <h3>Address</h3>
        <p>D-Coding International School</p>
        <p>99628, Main, North Calorina</p>
        <p>via Mersin 10, USA</p>
        <p>Tel: +512 5487 45</p>
        <p>
          E-mail:<span>info@dc.edu</span>
        </p>
      </div>
      <form className={classes.contactForm} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name-Surname</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="tel">Telephone Number</label>
          <input type="number" id="tel" ref={telRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea type="email" id="message" ref={messageRef} />
        </div>
        <button className={classes.button}>Send</button>
      </form>
    </motion.div>
  );
};

export default Contact;
