import styled from "styled-components";

import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const Name = styled.span`
  width: 80%;
  /* margin-bottom: 15px; */
`;

export const Price = styled.span`
  width: auto;
`;

export const ProductButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;
