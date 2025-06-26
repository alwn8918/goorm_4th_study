import React, { useState } from "react";
import * as I from "./Input.style";

interface Props {
  placeholder: string;
  width: number;
  isPassword?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Input(props: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isFocused || props.value.length > 0;

  return (
    <I.Container>
      <I.InputBox
        width={props.width}
        isActive={isActive}
        isError={!!props.error}
      >
        <I.Input
          type={props.isPassword ? "password" : "text"}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </I.InputBox>
      <I.ErrorText isVisible={!!props.error}>{props.error || "‎"}</I.ErrorText>
    </I.Container>
  );
}
