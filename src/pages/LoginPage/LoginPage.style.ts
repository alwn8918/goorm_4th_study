import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 100vh;
`;

export const LoginContainer = styled.div`
  width: 881px;
  height: 718px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 110px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.black};
  font-family: "GmarketSansBold";
  font-size: 48px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: 70px;
  margin-bottom: 25px;
`;

export const SignupContainer = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;

  color: ${(props) => props.theme.black};
  font-family: "GmarketSansMedium";
  font-size: 20px;

  margin-top: 20px;
`;

export const SignupText = styled.p``;

export const SignupButton = styled.button`
  all: unset;
  text-decoration-line: underline;
  text-underline-position: from-font;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;
