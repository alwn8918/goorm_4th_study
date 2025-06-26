import MainButton from "../../components/Button/MainButton";
import * as S from "./StartPage.style";
import { useNavigate } from "react-router-dom";

// image
import background from "../../assets/image_background.png";

export default function StartPage() {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  };

  return (
    <S.Container>
      <S.Title>{"타입한입\n다이어리"}</S.Title>
      <MainButton onClick={onClickLogin} isActive={true}>
        로그인하러 가기
      </MainButton>
      <S.BackgroundImage src={background} />
    </S.Container>
  );
}
