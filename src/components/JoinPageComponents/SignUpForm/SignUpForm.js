import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { sendAuth } from "../../../store/authSlice/sendAuth";

import { NavLink, useHistory } from "react-router-dom";

import { useFormik } from "formik";
import { validate } from "./form-validation";

import classes from "./signUpForm.module.scss";

const SignUpForm = () => {
  const [isShowResponseError, setIsShowResponseError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const logInForm = useSelector((state) => state.auth.logInForm);
  const status = useSelector((state) => state.auth.status);
  const responseError = useSelector((state) => {
    if (!state.auth.error) {
      return;
    }
    return `${state.auth.error[0]}${state.auth.error
      .slice(1)
      .replace("_", " ")
      .toLowerCase()}`;
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    if (logInForm) {
      dispatch(sendAuth({ email, password }));
    }
    if (!logInForm) {
      dispatch(sendAuth({ email, password }));
    }

    setIsShowResponseError(false);
    resetForm();
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: { email: "", password: "", repeatPassword: "" },
    validate,
    onSubmit,
  });

  useEffect(() => {
    if (status === "success") {
      setIsShowResponseError(false);
      history.replace("/");
    }
    if (status === "error") {
      setIsShowResponseError(true);
    }
  }, [status, history]);

  useEffect(() => {
    resetForm();
    setIsShowResponseError(false);
  }, [logInForm, resetForm]);

  return (
    <section className={classes["form-wrapper"]}>
      <div className={classes.nav}>
        <NavLink to="/join/log-in" activeClassName={classes.active}>
          Log in
        </NavLink>
        <NavLink to="/join/sign-up" activeClassName={classes.active}>
          Sign up
        </NavLink>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <section className={classes.inputs}>
          {isShowResponseError && !touched.email && (
            <p className={classes.error}>{responseError}</p>
          )}
          <input
            name="email"
            type="email"
            placeholder="Enter email"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && (
            <p className={classes.error}>{errors.email}</p>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          {errors.password && touched.password && (
            <p className={classes.error}>{errors.password}</p>
          )}

          {!logInForm && (
            <input
              name="repeatPassword"
              type="password"
              placeholder="Repate Password"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.repeatPassword}
            />
          )}
          {errors.repeatPassword && touched.repeatPassword && !logInForm && (
            <p className={classes.error}>{errors.repeatPassword}</p>
          )}
        </section>
        <input
          type="submit"
          value={
            status === "loading"
              ? "Loading"
              : `${logInForm ? "Log in" : "Create Account"}`
          }
          disabled={status === "loading"}
        />
      </form>
    </section>
  );
};

export default SignUpForm;
