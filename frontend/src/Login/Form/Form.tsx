import React from "react";
import { client_id } from "@front/env";

import { StyledDiv, StyledInput, StyeldButton } from "./style";

const getCode = () => {
  let scope = "user";
  let urlString = `https://github.com/login/oauth/authorize?client_id=${client_id}`;

  location.href = urlString;
};

const Form: React.FC = () => {
  return (
    <StyledDiv>
      <StyledInput type="text" placeholder="ID" />
      <StyledInput type="password" placeholder="PW" />
      <StyeldButton>로그인</StyeldButton>
      <StyeldButton onClick={getCode}>Login With Github</StyeldButton>
    </StyledDiv>
  );
};

export default Form;
