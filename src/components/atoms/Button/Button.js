import * as React from "react";
import { StyledButton, StyledText } from "./styles";

const Button = (props) => {
  const { title } = props;
  return (
    <StyledButton {...props} onClick={props.onClick}>
      <StyledText {...props}>{title}</StyledText>
    </StyledButton>
  );
};

export default Button;
