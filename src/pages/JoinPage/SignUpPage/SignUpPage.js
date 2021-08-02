import { useLocation } from "react-router-dom";

import SignUpForm from "../../../components/JoinPageComponents/SignUpForm/SignUpForm";
import LogInForm from "../../../components/JoinPageComponents/LoginForm/LogInForm";
import JoinHeader from "../../../components/JoinPageComponents/JoinHeader/JoinHeader";

import Background from "../../../components/UI/Background/Background";
import joinBackground from "../../../images/join-background.jpg";

import classes from "./signUpPage.module.scss";

const SignUpPage = () => {
  const { pathname } = useLocation();
  const isLogIn = pathname === "/join/log-in";

  return (
    <Background src={joinBackground} className={classes.main}>
      <JoinHeader title={"explore more recipes"} className={classes.header} />
      {isLogIn && <LogInForm />}
      {!isLogIn && <SignUpForm />}
    </Background>
  );
};

export default SignUpPage;
