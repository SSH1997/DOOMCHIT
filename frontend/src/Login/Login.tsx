import React from "react";

import { StyledOuterDiv, StyledInnerDiv, StyledP } from "./style";
import Form from "./Form";

const Login: React.FC = () => {
  return (
    <StyledOuterDiv>
      <StyledInnerDiv>
        <StyledP>DOOMCHIT</StyledP>
        <Form />
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
};

export default Login;
