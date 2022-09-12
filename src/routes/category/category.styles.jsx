import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  //   justify-self: center;
  //   align-self: center;
  //   border-right: solid;
  //   border-bottom: solid;
  //   padding: 1rem;
`;
