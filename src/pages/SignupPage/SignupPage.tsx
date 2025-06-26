import * as S from "./SignupPage.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// image
import background from "../../assets/image_background.png";

// component
import Input from "../../components/Input/Input";
import MainButton from "../../components/Button/MainButton";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    id: "",
    password: "",
    confirmPassword: "",
  });

  const isFormValid =
    !!form.name &&
    !!form.id &&
    !!form.password &&
    !!form.confirmPassword &&
    !errors.id &&
    !errors.password &&
    !errors.confirmPassword;

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    validate(field, value);
  };

  const validate = (field: string, value: string) => {
    if (field === "id") {
      const idRegex = /^[A-Za-z0-9]{6,12}$/;
      setErrors({
        ...errors,
        id: idRegex.test(value) ? "" : "6-12자의 영문, 숫자를 사용해 주세요.",
      });
    }

    if (field === "password") {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
      setErrors({
        ...errors,
        password: passwordRegex.test(value)
          ? ""
          : "8-16자의 영문, 숫자, 특수문자를 모두 사용해 주세요.",
      });
    }

    if (field === "confirmPassword") {
      setErrors({
        ...errors,
        confirmPassword:
          value === form.password ? "" : "비밀번호가 일치하지 않습니다.",
      });
    }
  };

  const onSubmit = () => {
    validate("id", form.id);
    validate("password", form.password);
    validate("confirmPassword", form.confirmPassword);

    if (isFormValid) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: form.name,
          id: form.id,
          password: form.password,
        })
      );
      alert("회원가입 성공");
      navigate(-1);
    }
  };

  return (
    <S.Container>
      <S.SignupContainer>
        <S.Title>회원가입</S.Title>
        <S.InputContainer>
          <S.SubContainer>
            <Input
              width={500}
              placeholder="이름"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <Input
              width={500}
              placeholder="아이디"
              value={form.id}
              onChange={(e) => handleChange("id", e.target.value)}
              error={errors.id}
            />
          </S.SubContainer>
          <S.Line />
          <S.SubContainer>
            <Input
              width={500}
              placeholder="비밀번호"
              isPassword
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              error={errors.password}
            />
            <Input
              width={500}
              placeholder="비밀번호 확인"
              isPassword
              value={form.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              error={errors.confirmPassword}
            />
          </S.SubContainer>
        </S.InputContainer>
        <MainButton onClick={onSubmit} isActive={isFormValid}>
          회원가입
        </MainButton>
      </S.SignupContainer>
      <S.BackgroundImage src={background} />
    </S.Container>
  );
}
