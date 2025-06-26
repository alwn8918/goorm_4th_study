import * as L from "./LoginPage.style";
import Input from "../../components/Input/Input";
import MainButton from "../../components/Button/MainButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// image
import background from "../../assets/image_background.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid = !!form.id && !!form.password;

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const onClickSignup = () => {
    navigate("/signup");
  };

  const onSubmit = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (form.id === storedUser.id && form.password === storedUser.password) {
      alert("로그인 성공");
      navigate("/home");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <L.Container>
      <L.LoginContainer>
        <L.Title>로그인</L.Title>
        <L.InputContainer>
          <Input
            width={600}
            placeholder="아이디"
            value={form.id}
            onChange={(e) => handleChange("id", e.target.value)}
          />
          <Input
            width={600}
            placeholder="비밀번호"
            isPassword={true}
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </L.InputContainer>
        <MainButton onClick={onSubmit} isActive={isFormValid}>
          로그인
        </MainButton>
        <L.SignupContainer>
          <L.SignupText>계정이 없으신가요?</L.SignupText>
          <L.SignupButton onClick={onClickSignup}>회원가입하기</L.SignupButton>
        </L.SignupContainer>
      </L.LoginContainer>
      <L.BackgroundImage src={background} />
    </L.Container>
  );
}
