import { Form, Input, Button, Label, Wrapper } from './Register.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export function Register() {
  const nameId = nanoid();
  const emailId = nanoid();
  const passId = nanoid();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameId}>Name</Label>
        <Input id={nameId} required name="name" type="text" />
        <Label htmlFor={emailId}>Email</Label>
        <Input id={emailId} required name="email" type="email" />
        <Label htmlFor={passId}>Password</Label>
        <Input id={passId} required name="password" type="password" />
        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  );
}
