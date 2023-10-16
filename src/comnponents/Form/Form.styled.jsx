import styled from '@emotion/styled';

export const HtmlForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  width: 250px;
  padding: 100px 20px;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 200px;

  :not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  width: 120px;
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