import classes from "./navbar.module.scss";

import whiteLogo from "../../../images/white-logo.svg";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <img src={whiteLogo} alt="white bisto logo" />
      <div className={classes.buttons}>
        <button className={classes.search}></button>
        <button className={classes.menu}></button>
      </div>
    </nav>
  );
};

export default Navbar;
