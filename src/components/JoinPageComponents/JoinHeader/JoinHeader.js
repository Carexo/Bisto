import darkGreenLogo from "../../../images/dark-green-logo.svg";

import classes from "./joinHeader.module.scss";

const JoinHeader = () => {
  return (
    <header className={classes.header}>
      <img src={darkGreenLogo} alt="Bisto logo" />
      <h1>Bisto</h1>
      <h2>Welcome in Bisto</h2>
    </header>
  );
};

export default JoinHeader;
