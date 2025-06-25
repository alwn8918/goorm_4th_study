import * as L from "./LoginPage.style";
import Input from "../../components/Input/Input";
import MainButton from "../../components/Button/MainButton";
import { useNavigate } from "react-router-dom";

// image
import background from "../../assets/image_background.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate("/signup");
  };

  return (
    <L.Container>
      <L.LoginContainer>
        <L.Title>로그인</L.Title>
        <L.InputContainer>
          <Input width={600}>아이디</Input>
          <Input width={600}>비밀번호</Input>
        </L.InputContainer>
        <MainButton>로그인</MainButton>
        <L.SignupContainer>
          <L.SignupText>계정이 없으신가요?</L.SignupText>
          <L.SignupButton onClick={onClickSignup}>회원가입하기</L.SignupButton>
        </L.SignupContainer>
      </L.LoginContainer>
      <L.BackgroundImage src={background} />
    </L.Container>
  );
}
