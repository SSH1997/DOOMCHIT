import React from "react";

import { StyledDiv, StyledInput, StyeldButton } from "./style";

const handleClick = () => {
  alert(3);
};

const Form: React.FC = () => {
  return (
    <StyledDiv>
      <StyledInput type="text" placeholder="ID" />
      <StyledInput type="password" placeholder="PW" />
      <StyeldButton>로그인</StyeldButton>
      <StyeldButton onClick={handleClick}>Login With Github</StyeldButton>
    </StyledDiv>
  );
};

export default Form;
