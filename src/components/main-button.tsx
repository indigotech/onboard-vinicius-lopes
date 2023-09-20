import styled from "styled-components/native";

interface ButtonProps {
  primary?: boolean;
  label: string;
  onPress: () => void;
}

const StyledPressable = styled.Pressable<{ $primary?: boolean; }>`
  background: ${(props) => props.$primary ? "navy" : "white"};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid navy;
  border-radius: 3px;
  min-height: 44px;
`;

const StyledText = styled.Text<{ $primary?: boolean; }>`
  color: ${(props) => props.$primary ? "white" : "navy"};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export function MainButton({primary, label, onPress}: ButtonProps) {
  return (
    <StyledPressable $primary={primary} onPress={onPress}>
      <StyledText $primary={primary}>
        {label}
      </StyledText>
    </StyledPressable>
  );
}
