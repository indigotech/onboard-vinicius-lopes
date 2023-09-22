import React from "react";
import styled from "styled-components/native";
import { TextInputProps, TextProps } from "react-native";

interface StyledInputSimple {
    error?: boolean;
    size?: string;
}

export const StyledLabel: React.FC<StyledInputSimple & TextProps> = styled.Text`
  font-size: ${ props => props.size ? props.size : "12px"};
  font-weight: regular;
  color: ${ props => props.error ? "red" : "#777777"};
  margin-bottom: 12px;
`;

export const StyledInput: React.FC<StyledInputSimple & TextInputProps> = styled.TextInput`
  border: 1px solid ${ props => props.error ? "red" : "#777777"};
  padding: 12px;
  margin-bottom: ${ props => props.error ? "0" : "12px"};
  min-height: 44px;
`;

export const StyledErrorMessage = styled.Text`
  margin: 8px 0 12px 0;
  font-size: 12px;
  color: red;
`;
