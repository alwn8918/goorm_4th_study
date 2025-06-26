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

export const SignupContainer = styled.div`
  width: 1290px;
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
  gap: 45px;

  margin-top: 50px;
  margin-bottom: 50px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  margin-top: 20px;
`;

export const Line = styled.div`
  width: 3px;
  height: 300px;
  background-color: ${(props) => props.theme.gray};
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 18px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;
