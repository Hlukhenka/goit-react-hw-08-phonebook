import { useSelector, useDispatch } from 'react-redux';
import { SearchField, Wrapper } from './Search.styled';
import { change } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';

export function Search() {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onFielterChange = event => {
    dispatch(change(event.currentTarget.value));
  };

  return (
    <Wrapper>
      <SearchField
        type="text"
        placeholder="Search"
        value={filterValue}
        onChange={onFielterChange}
      />
    </Wrapper>
  );
}