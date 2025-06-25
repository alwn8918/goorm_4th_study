import React, { useState } from "react";
import * as I from "./Input.style";

interface Props {
  width: number;
  children: string;
}

export default function Input(props: Props) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const isActive = isFocused || text.length > 0;

  return (
    <I.Container width={props.width} isActive={isActive}>
      <I.Input
        placeholder={props.children}
        value={text}
        onChange={onChangeInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </I.Container>
  );
}
