import React from "react";
import styled from "styled-components/native";

const StyledLabel = styled.Text`
  font-size: 12px;
  font-weight: regular;
  color: #777777;
  margin-bottom: 12px;
`;

const StyledInput = styled.TextInput`
  border: 1px solid #777777;
  padding: 12px;
  margin-bottom: 12px;
  min-height: 44px;
`;

const StyledErrorMessage = styled.Text`
  margin-bottom: 12px;
  font-size: 12px;
  color: red;
` 
interface InputProps {
  label: string;
  value: string;
  errorMessage?: string;
  onTextChange: (value: string) => void;
  secureTextEntry?: boolean;
}

export function InputSimple (props: InputProps): JSX.Element {
  return (
    <React.Fragment>
      <StyledLabel>
        {props.label}
      </StyledLabel>
      <StyledInput
        value={props.value}
        onChangeText={props.onTextChange}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize='none'
      />
      <StyledErrorMessage>
        {props.errorMessage}
      </StyledErrorMessage>
    </React.Fragment>
  );
}
