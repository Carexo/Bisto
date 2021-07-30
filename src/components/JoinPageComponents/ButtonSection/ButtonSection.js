import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";

import classes from "./buttonSection.module.scss";

const ButtonSection = () => {
  return (
    <section className={classes["button-section"]}>
      <div className={classes["primary-button-section"]}>
        <Link to="/join/log-in">
          <Button className={classes["primary-button"]}>Log in</Button>
        </Link>

        <Link to="/join/sign-up">
          <Button className={classes["primary-button"]}>Sign up</Button>
        </Link>
      </div>

      <Link to="/">
        <Button className={classes["secendary-button"]}>
          Go to bisto without logging in
        </Button>
      </Link>
    </section>
  );
};

export default ButtonSection;
