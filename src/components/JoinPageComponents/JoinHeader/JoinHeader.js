import darkGreenLogo from "../../../images/dark-green-logo.svg";

import classes from "./joinHeader.module.scss";

const JoinHeader = (props) => {
  return (
    <header className={`${props.className} ${classes.header} `}>
      <img src={darkGreenLogo} alt="Bisto logo" />
      <h1>Bisto</h1>
      <h2>{props.title}</h2>
    </header>
  );
};

export default JoinHeader;
