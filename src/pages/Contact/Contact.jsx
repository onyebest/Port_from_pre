import React from "react";
import "./Contact.css";
import Navbar from "../../component/Navbar";
import { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c0l6dtk",
        "template_qhpn5od",
        form.current,
        "L-vNbzshkAttr1SYp"
      )

      .then(
        (result) => {
          console.log(result.text);
        },

        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className='contact'>
      <Navbar />
      <div className='top__text'>Contact</div>
      <h4>
        Always open to new interactions and collaborations from Clients and
        other Tech Newbies. Eager to create and develop the world not just being
        a part of it.
      </h4>

      <form ref={form} onSubmit={sendEmail}>
        <input type='name' placeholder='Full Name' required />
        <input type='email' placeholder='Example@gmail.com' required />
        <textarea name='message' rows='7' placeholder='Message'></textarea>
        <input type='submit' placeholder='Send Message' className='btn' />
      </form>
    </div>
  );
};

export default Contact;
