import { TextProps } from "react-native";
import styled from "styled-components/native";

interface HeaderProps extends TextProps{
  bold?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
}

export const StyledHeader: React.FC<HeaderProps> = styled.Text`
  font-size: ${props => props.fontSize ? props.fontSize : "24px"};
  font-weight: ${props => props.bold ? props.bold : "normal"};
  color: ${props => props.color ? props.color : "black"};
  margin: ${props => props.margin ? props.margin : "20px 0 20px 0"};
`;
