import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Text } from "react-native";

export const Header = styled(Text)<{
  $bold?: boolean;
  $fontSize: string;
}>`
  font-size: ${props => props.$fontSize ? props.$fontSize : "24px"};
  font-weight: ${props => props.$bold ? "bold" : "normal"};
  color: black;
  margin: 20px 0 20px 0;
`;
