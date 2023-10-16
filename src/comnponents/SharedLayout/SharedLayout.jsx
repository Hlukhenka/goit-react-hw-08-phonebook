import { Outlet } from 'react-router-dom';
import { Header, StyledLink, Nav } from './SharedLayout.styled';
import { UserMenu } from 'comnponents/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export function SharedLayout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/goit-react-hw-08-phonebook/contacts">
            Contacts
          </StyledLink>
          {!isLoggedIn && (
            <>
              <StyledLink to="/goit-react-hw-08-phonebook/register">
                Register
              </StyledLink>
              <StyledLink to="/goit-react-hw-08-phonebook/login">
                Login
              </StyledLink>
            </>
          )}
        </Nav>
        {isLoggedIn && <UserMenu />}
      </Header>
      <Outlet />
    </>
  );
}
