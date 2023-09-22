import { StyledPressable, StyledLabel } from "./main-button.styles";

interface ButtonProps {
  primary?: boolean;
  label: string;
  disabled?: boolean;
  onPress: () => void;
}

export function MainButton({ primary, label, disabled, onPress }: ButtonProps) {
  return (
    <StyledPressable primary={primary} onPress={onPress} disabled={disabled}>
      <StyledLabel primary={primary}>
        {label}
      </StyledLabel>
    </StyledPressable>
  );
}
