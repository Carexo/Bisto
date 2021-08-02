import LoginForm from "../../../components/JoinPageComponents/LoginForm/LogInForm";
import Background from "../../../components/UI/Background/Background";

import joinBackground from "../../../images/join-background.jpg";

const LoginPage = () => {
  return (
    <Background src={joinBackground}>
      <LoginForm />
    </Background>
  );
};

export default LoginPage;
