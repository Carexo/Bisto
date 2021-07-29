import Button from "../../UI/Button/Button";

import classes from "./buttonSection.module.scss";

const ButtonSection = () => {
  return (
    <section className={classes["button-section"]}>
      <div className={classes["primary-button-section"]}>
        <Button className={classes["primary-button"]}>Log in </Button>
        <Button className={classes["primary-button"]}>Sign up</Button>
      </div>
      <Button className={classes["secendary-button"]}>
        Go to bisto without logging in
      </Button>
    </section>
  );
};

export default ButtonSection;
