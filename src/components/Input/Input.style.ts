import styled from "styled-components";

interface ContainerProps {
  width: number;
  isActive: boolean;
  isError?: boolean;
}

interface ErrorProps {
  isVisible: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputBox = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.white};
  width: ${(props) => props.width}px;
  height: 100px;
  border-radius: 20px;

  border-radius: 20px;
  border: 3px solid
    ${(props) =>
      props.isError
        ? props.theme.warn
        : props.isActive
        ? props.theme.black
        : props.theme.gray};
  color: ${(props) => (props.isError ? props.theme.warn : props.theme.black)};

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

export const ErrorText = styled.p<ErrorProps>`
  color: ${(props) => props.theme.warn};
  font-size: 15px;
  font-family: "GmarketSansMedium";
  margin-top: 10px;
  margin-left: 10px;

  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;
