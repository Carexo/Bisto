import classes from "./background.module.scss";

const Background = (props) => {
  return (
    <div
      style={{ "--src": `url(${props.src})` }}
      className={`${classes.background} ${props.className || " "}`}
    >
      {props.children}
    </div>
  );
};

export default Background;
