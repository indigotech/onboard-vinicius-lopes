import { PressableProps, TextProps } from "react-native";
import styled from "styled-components/native";

interface MainProps {
  primary?: boolean;
  size?: string;
}
  
export const StyledPressable: React.FC<MainProps & PressableProps> = styled.Pressable`
  background: ${(props) => props.primary ? "navy" : "white"};
  border: 2px solid navy;
  min-height: 44px;
  justify-content: center;
`;

export const StyledLabel: React.FC<MainProps & TextProps> = styled.Text`
  color: ${(props) => props.primary ? "white" : "navy"};
  text-align: center;
  font-size: ${(props) => props.size ? props.size : "16px"};
  font-weight: bold;
`;
