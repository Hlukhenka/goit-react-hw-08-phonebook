import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid black;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: #000;
  font-weight: 500;

  :hover {
    background-color: lightblue;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;