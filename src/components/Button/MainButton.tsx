import { ReactElement } from "react";
import * as M from "./MainButton.style";

interface Props {
  children: string | ReactElement;
}

export default function MainButton(props: Props) {
  return (
    <>
      <M.Container>{props.children}</M.Container>
    </>
  );
}
