import { ReactElement } from "react";
import * as M from "./MainButton.style";

interface Props {
  children: string | ReactElement;
  onClick?: () => void;
  isActive: boolean;
}

export default function MainButton(props: Props) {
  return (
    <>
      <M.Container
        onClick={props.isActive ? props.onClick : undefined}
        isActive={props.isActive}
      >
        {props.children}
      </M.Container>
    </>
  );
}
