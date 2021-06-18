import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext } from "react";
import axios from "axios";
import { BASE_URL, AUTH_PATH } from "../utils/constants";
import { loginSchema } from "../utils/shema";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import Heading from "./Heading";
import { Component, ComponentEye } from "./Icons";
import { ComponentAvatar } from "./Icons";
import Loading from "./Loading";

export default function LoginForm() {
  const history = useHistory();
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [, setAuth] = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [visible, setVisibility] = useState(false);
  const [, setPassword] = useState("");
  const togglePassword = () => {
    setVisibility(visible ? false : true);
  };

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(`${BASE_URL}${AUTH_PATH}`, data);
      console.log("response", response.data);
      setAuth(response.data);
      setSuccess(true);
      if (response) {
        history.push("./admin");
      }
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)} className="login-page">
          <div className="login-heading">
            <Heading title="Login" />
          </div>
          <div className="login-icon">
            <ComponentAvatar />
          </div>

          <div className="login-form">
            <div>
              {loginError && (
                <p className="error">Incorrect username or password</p>
              )}
            </div>
            <div>
              {success ? (
                <p className="success">You logged successfully!</p>
              ) : null}
            </div>
            <div className="group">
              <label htmlFor="user" className="label">
                Name *
              </label>
              <input
                name="identifier"
                autoComplete="username"
                placeholder="Username / E-mail"
                ref={register}
              />
              {errors.identifier && <p>{errors.identifier.message}</p>}
            </div>

            <div className="group">
              <label htmlFor="password" className="label">
                Password *
              </label>
              <div className="password-div">
                <input
                  name="password"
                  placeholder="Password"
                  ref={register}
                  type={visible ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={togglePassword} className="showPass">
                  {visible ? <Component /> : <ComponentEye />}
                </span>
              </div>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="hr"></div>
            <div className="group">
              <button type="submit" className="button">
                {submitting ? <Loading /> : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
