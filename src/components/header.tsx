import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Text } from "react-native";

export const Header = styled(Text)<{
  $bold?: string;
  $fontSize?: string;
  $color?: string;
  $margin?: string;
}>`
  font-size: ${props => props.$fontSize ? props.$fontSize : "24px"};
  font-weight: ${props => props.$bold ? props.$bold : "regular"};
  color: ${props => props.$color ? props.$color : "black"};
  margin: ${props => props.$margin ? props.$margin : "20px 0 20px 0"};
`;
