import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillContacts } from "react-icons/ai";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3234uo2', 'template_xh64nkc', refForm.current, '399w-kjmFhw-oiUI3')
        .then(() => {
            alert('Message successfully Sent!');
            window.location.reload(false);
        }, () => {
            alert('Failed to Send Message, please try again.');
        });
        e.target.reset();
  }

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<AiFillContacts size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form action="" className="contact__content__form" ref={refForm} onSubmit={sendEmail}>
            <div  className="contact__content__form__controlswrapper" >
              <div>
                <input
                  required
                  name="from_name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="user_email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="user_email"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;