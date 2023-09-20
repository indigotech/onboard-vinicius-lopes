import { StyledPressable, StyledLabel } from "./main-button.styles";

interface ButtonProps {
  primary?: boolean;
  label: string;
  onPress: () => void;
}

export function MainButton({primary, label, onPress}: ButtonProps) {
  return (
    <StyledPressable primary={primary} onPress={onPress}>
      <StyledLabel primary={primary}>
        {label}
      </StyledLabel>
    </StyledPressable>
  );
}
