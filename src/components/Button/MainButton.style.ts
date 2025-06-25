import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.pink};
  width: 600px;
  height: 100px;
  border-radius: 20px;

  color: ${(props) => props.theme.white};
  font-family: "GmarketSansBold";
  font-size: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
