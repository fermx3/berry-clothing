import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  background-color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 1rem;

  @media (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavLinks = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
