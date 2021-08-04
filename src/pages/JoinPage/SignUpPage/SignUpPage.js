import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setLogInForm } from "../../../store/authSlice/authSlice";

import SignUpForm from "../../../components/JoinPageComponents/SignUpForm/SignUpForm";
import JoinHeader from "../../../components/JoinPageComponents/JoinHeader/JoinHeader";

import Background from "../../../components/UI/Background/Background";
import joinBackground from "../../../images/join-background.jpg";

import classes from "./signUpPage.module.scss";

const SignUpPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  dispatch(setLogInForm(pathname === "/join/log-in"));

  return (
    <Background src={joinBackground} className={classes.main}>
      <JoinHeader title={"explore more recipes"} className={classes.header} />
      <SignUpForm />
    </Background>
  );
};

export default SignUpPage;
