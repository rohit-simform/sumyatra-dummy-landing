"use client";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import "./ContactUs.scss";
import Button from "../Button/Button";
import { JOIN_WAIT_FORM_API } from "../../const/paths";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message?: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
}

interface ErrToastPropType {
  show?: boolean;
  msg?: string;
}

export default function ContactUs({ navRef }: any) {
  const [sentMailStatus, setSentMailStatus] = useState(false);
  const [displayErrToast, setDisplayErrorToast] = useState<ErrToastPropType>({
    show: false,
    msg: "",
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    subject: "",
  });

  const closeErrorToast = useCallback(() => {
    setDisplayErrorToast({
      show: false,
      msg: "",
    });
  }, []);

  const sendMail = async (payload: FormData) => {
    try {
      const resp = await fetch(JOIN_WAIT_FORM_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "omit",
      });

      if (!resp.ok) {
        // If the response status is not OK, throw an error
        const errorData = await resp.json();
        throw new Error(
          errorData?.message || "Something went wrong. Please try again."
        );
      }

      const res = await resp.json();
      setSentMailStatus(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      setDisplayErrorToast({
        show: true,
        msg: error?.message,
      });

      setTimeout(() => closeErrorToast(), 50000);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value }: any = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors: Errors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      sendMail(formData);
    }
  };

  const handleReset = useCallback(() => {
    setSentMailStatus(false);
  }, []);

  return (
    <section className="contactWrapper" id="waitlist" ref={navRef}>
      <div className="container">
        <div className="contact">
          <div className="contact__info">
            <h2 className="title">Join the Waitlist or Drop us a message</h2>
            <p className="details">Engage with us early: </p>
            <ul className="list">
              <li>Schedule a private preview</li>
              <li>Tell us about your partnership challenges</li>
              <li>Join our newsletters for regular updates</li>
            </ul>
          </div>
          <div className="contact__form">
            {!sentMailStatus ? (
              <form onSubmit={handleSubmit}>
                <div className="formGroup widthalf">
                  <label className="formGroup__label">Name</label>
                  <input
                    className="formGroup__text"
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={formData.name}
                    maxLength={25}
                    placeholder="Enter your name"
                  ></input>
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="formGroup widthalf">
                  <label className="formGroup__label">E-Mail</label>
                  <input
                    className="formGroup__text"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={formData.email}
                    maxLength={50}
                    placeholder="Enter your email"
                  ></input>
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="formGroup widthfull">
                  <label className="formGroup__label">Subject</label>
                  <input
                    className="formGroup__text"
                    onChange={handleChange}
                    type="text"
                    name="subject"
                    value={formData.subject}
                    maxLength={90}
                    placeholder="Add me to the Wait-List..."
                  ></input>
                  {errors.subject && (
                    <span className="error">{errors.subject}</span>
                  )}
                </div>
                <div className="formGroup widthfull">
                  <label className="formGroup__label">Message</label>
                  <textarea
                    className="formGroup__textarea"
                    onChange={handleChange}
                    name="message"
                    maxLength={300}
                    value={formData.message}
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div className="submitBtn">
                  <Button submit>Submit</Button>
                </div>
              </form>
            ) : (
              <div className="submitAction">
                <h2 className="submitAction__title">
                  Thank you for reaching out!
                </h2>
                <p className="submitAction__discription">
                  We appreciate your interest. Here&apos;s what you can expect
                  next:
                </p>
                <ul className="submitAction__list">
                  <li>We&apos;ll contact you soon to confirm the details.</li>
                  <li>We&apos;ll provide exclusive access shortly.</li>
                  <li>Look out for our latest updates and offers.</li>
                </ul>
                <p className="submitAction__discription">
                  We&apos;re excited to connect with you!
                </p>
                <div className="submitAction__btn">
                  <Button onClick={handleReset}>Done</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {displayErrToast?.show && (
        <div className="tostNotification">
          {displayErrToast?.msg || "Something went wrong."}
          <span className="clostTost" onClick={closeErrorToast}>
            <AiOutlineCloseCircle />
          </span>
        </div>
      )}
    </section>
  );
}
