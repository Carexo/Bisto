import classes from "./navbar.module.scss";

import whiteLogo from "../../../images/white-logo.svg";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <img src={whiteLogo} alt="white bisto logo" />
    </nav>
  );
};

export default Navbar;
