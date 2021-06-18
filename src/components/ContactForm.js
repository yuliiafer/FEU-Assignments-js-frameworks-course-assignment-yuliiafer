import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ValidationError from "./ValidationError";
import { contactSchema } from "../utils/shema";
import { optionsSubject, valuesSubject } from "./SelectButton";
import Heading from "../components/Heading";
import { ComponentAdress } from "./Icons";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data) {
    console.log(data);
    alert("Success! Your shema has been sent");
    setSubmitted(true);
    reset(valuesSubject);
  }
  const intialValues = {
    firstName: "Your First Name",
    lastName: "Your Last Name",
    email: "Your Email",
    message: "Your Message",
    subject: "",
  };

  console.log(errors);
  const animatedComponents = makeAnimated();

  return (
    <>
      <div className="backdrop-contact"></div>
      <div className="contact">
        <form onSubmit={handleSubmit(onSubmit)} className="contact-page">
          <Heading title="Contact" />
          <div className="contact-icon">
            <ComponentAdress />
          </div>
          <div className="login-form">
            <div className="group">
              <label htmlFor="firstName" className="contact-label">
                First Name *
              </label>
              <input
                name="firstName"
                placeholder={intialValues.firstName}
                type="text"
                id="firstName"
                ref={register}
              />
              {errors.firstName && (
                <ValidationError>{errors.firstName.message}</ValidationError>
              )}
            </div>
            <div className="group">
              <label htmlFor="firstName" className="contact-label">
                Last Name *
              </label>
              <input
                name="lastName"
                placeholder={intialValues.lastName}
                type="text"
                id="lastName"
                ref={register}
              />
              {errors.lastName && (
                <ValidationError>{errors.lastName.message}</ValidationError>
              )}
            </div>
            <div className="group">
              <label htmlFor="email" className="contact-label">
                Email *
              </label>

              <input
                name="email"
                type="text"
                id="email"
                ref={register}
                placeholder={intialValues.email}
              />

              {errors.email && (
                <ValidationError>{errors.email.message}</ValidationError>
              )}
            </div>
            <div className="group">
              <label htmlFor="subject" className="contact-label">
                Subject *
              </label>
              <Controller
                as={Select}
                closeMenuOnSelect={true}
                components={animatedComponents}
                options={optionsSubject}
                name="subject"
                placeholder="Select..."
                isMulti
                control={control}
                defaultValue="subject"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="contact-label">
                Message *
              </label>
              <textarea
                name="message"
                ref={register}
                type="text"
                id="email"
                placeholder={intialValues.message}
              ></textarea>

              {errors.message && (
                <ValidationError>{errors.message.message}</ValidationError>
              )}
            </div>
            <div className="hr"></div>
            <div className="group">
              <input disabled={submitted} type="submit" className="button" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
