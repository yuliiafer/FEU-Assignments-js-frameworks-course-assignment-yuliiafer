import * as yup from "yup";

export const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please enter your username / email"),
  password: yup.string().required("Please enter your password"),
});

export const contactSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, `Your first name must at be at least ${3} characters`),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, `Your last name must at be at least ${4} characters`),
  email: yup
    .string()
    .required("Please enter an email address")
    .matches(
      /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please enter a valid email address"
    ),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, `The message must be at least ${10} characters`),
});
