import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 350px;
  height: 250px;

  @media screen and (max-width: 1024px) {
    width: 250px;
  }

  @media screen and (max-width: 768px) and (min-width: 400px) {
    width: 100vw;
    height: 50vh;
  }

  @media screen and (max-width: 400px) {
    width: 400px;
    height: 50vh;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 92%;
  height: 20%;
  padding-left: 3%;
  margin: 1%;
  border: 1px solid black;
  border-radius: 3px;
`;

export const StyeldButton = styled.button`
  width: 95%;
  height: 20%;
  padding: 0;
  margin: 1%;
  border: 1px solid black;
  border-radius: 3px;

  &:hover {
    background-color: gray;
  }
`;
