import { NavLink } from "react-router-dom";

import classes from "./signUpForm.module.scss";

const SignUpForm = (props) => {
  const { isLogIn } = props;
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
      <form className={classes.form}>
        <section className={classes.inputs}>
          <input placeholder="Enter email" />

          <input placeholder="Password" />

          {!isLogIn && <input placeholder="Repate Password" />}
        </section>
        <input
          type="submit"
          value={`${isLogIn ? "Log in" : "Create Account"}`}
        />
      </form>
    </section>
  );
};

export default SignUpForm;
