import Background from "../../components/UI/Background/Background";

import JoinHeader from "../../components/JoinPageComponents/JoinHeader/JoinHeader";
import ButtonSection from "../../components/JoinPageComponents/ButtonSection/ButtonSection";

import classes from "./JoinPage.module.scss";

import joinBackground from "../../images/join-background.jpg";

const JoinPage = () => {
  return (
    <Background src={joinBackground} className={classes.main}>
      <JoinHeader title={"Welcome in Bisto"} />

      <ButtonSection />
      {/* <Switch>
        <Route path="/join/log-in" exact>
          <LogInForm />
        </Route>
        <Route path="/join/sign-up" exact>
          <SignUpForm />
        </Route>
      </Switch> */}
    </Background>
  );
};

export default JoinPage;
