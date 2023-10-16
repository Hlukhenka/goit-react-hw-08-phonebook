import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactItem, Delete } from './Contact.styled';

export function Contact({ content, id }) {
  const dispatch = useDispatch();

  const onContactDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactItem>
      {content} <Delete onClick={onContactDelete}>Delete</Delete>
    </ContactItem>
  );
}
