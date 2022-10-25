import styled, { css } from "styled-components";
import { colors } from "../../settings/variables";

const variantOptions = {
  primary: {
    backgroundColor: colors.cPrimaryLight,
    color: colors.cPrimary,
    borderColor: colors.cPrimary,
  },
  secondary: {
    backgroundColor: colors.cSecondaryLight,
    color: colors.cSecondary,
    borderColor: colors.cSecondary,
  },
};

const StyledButton = styled.button`
  height: 40px;
  padding: 0 16px;
  width: auto;
  appearance: none;
  box-shadow: none;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-radius: 100px;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}

  ${({ variant }) =>
    variant &&
    variantOptions[variant] &&
    css`
      background-color: ${variantOptions[variant].backgroundColor};
      border-color: ${variantOptions[variant].borderColor};
    `}
`;
const StyledText = styled.span`
  color: white;
  font-size: 14px;
  ${({ variant }) =>
    variant &&
    variantOptions[variant] &&
    css`
      color: ${variantOptions[variant].color};
    `}
`;

export { StyledButton, StyledText };
