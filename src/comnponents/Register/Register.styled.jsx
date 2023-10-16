import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  width: 300px;
  border-radius: 10px;
`;

export const Input = styled.input`
  margin-bottom: 30px;
  border-radius: 5px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Button = styled.button`
  width: 85px;
  place-self: center;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 5px 15px;
  background-color: #ccc;
  cursor: pointer;

  :hover {
    background-color: lightblue;
  }
`;
