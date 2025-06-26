import styled from "styled-components";

interface MainButtonProps {
  isActive: boolean;
}

export const Container = styled.div<MainButtonProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.pink : props.theme.gray};
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
