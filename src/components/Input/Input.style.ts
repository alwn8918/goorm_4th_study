import styled from "styled-components";

interface ContainerProps {
  width: number;
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.white};
  width: ${(props) => props.width}px;
  height: 100px;
  border-radius: 20px;

  border-radius: 20px;
  border: 3px solid
    ${(props) => (props.isActive ? props.theme.black : props.theme.gray)};

  display: flex;
  align-items: center;
  padding: 25px;
  cursor: pointer;
`;

export const Input = styled.input`
  all: unset;
  width: 100%;

  text-align: left;
  font-family: "GmarketSansMedium";
  font-size: 30px;

  &::placeholder {
    color: ${(props) => props.theme.gray};
  }
`;
