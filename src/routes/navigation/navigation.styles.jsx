import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  margin-bottom: 25px;
  top: 0;
  z-index: 1;
`;

export const NavigationContainer = styled.div`
  background-color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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

export const LoggedInUser = styled.div`
  display: flex;
  align-items: center;
  background-color: mediumvioletred;
  color: white;
  width: fit-content;
  padding: 0 10px;
  margin-left: auto;

  p {
    margin: 8px 0;
    font-weight: 600;
  }

  img {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    border-radius: 50%;
  }
`;
