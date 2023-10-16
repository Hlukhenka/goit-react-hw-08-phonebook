import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Mail, LogoutBtn } from './UserMenu.styled';
import { logout } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Wrapper>
      <Mail>{user.email}</Mail>
      <LogoutBtn type="button" onClick={handleLogout}>
        Logout
      </LogoutBtn>
    </Wrapper>
  );
}