import Background from "../components/UI/Background/Background";

import JoinHeader from "../components/JoinPageComponents/JoinHeader/JoinHeader";
import ButtonSection from "../components/JoinPageComponents/ButtonSection/ButtonSection";

import classes from "./JoinPage.module.scss";

import joinBackground from "../images/join-background.jpg";

const JoinPage = () => {
  return (
    <Background src={joinBackground} className={classes.main}>
      <JoinHeader />
      <ButtonSection />
    </Background>
  );
};

export default JoinPage;
