import React from "react";
import { StyledErrorMessage, StyledInput, StyledLabel } from "./input-simple.styles";

export interface InputSimpleProps {
  label: string;
  value: string;
  errorMessage?: string;
  onTextChange: (value: string) => void;
  secureTextEntry?: boolean;
}

export function InputSimple (props: InputSimpleProps): JSX.Element {
  const formError: boolean = props.errorMessage ? true : false;

  return (
    <React.Fragment>
      <StyledLabel error={formError}>
        {props.label}
      </StyledLabel>
      <StyledInput
        error={formError}
        value={props.value}
        onChangeText={props.onTextChange}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize='none'
      />
      {
        formError &&
        <StyledErrorMessage>
          {props.errorMessage}
        </StyledErrorMessage>
      }
    </React.Fragment>
  );
}
