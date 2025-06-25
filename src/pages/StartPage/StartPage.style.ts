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

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
  font-family: "GmarketSansBold";
  font-size: 128px;
  white-space: pre-line;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;
