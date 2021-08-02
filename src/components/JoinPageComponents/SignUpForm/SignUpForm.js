import classes from "./signUpForm.module.scss";

const SignUpForm = () => {
  return (
    <section className={classes["form-wrapper"]}>
      <div className={classes.nav}>
        <p>Log in</p>
        <p className={classes.active}>Sign up</p>
      </div>
      <form className={classes.form}>
        <div className={classes["input-field"]}>
          <label>E-mail</label>
          <input />
        </div>

        <div className={classes["input-field"]}>
          <label>Password</label>
          <input />
        </div>

        <div className={classes["input-field"]}>
          <label>Repeat password</label>
          <input />
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
