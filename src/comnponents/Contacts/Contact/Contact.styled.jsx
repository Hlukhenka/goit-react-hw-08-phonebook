import styled from '@emotion/styled';

export const ContactItem = styled.li`
  margin-bottom: 7px;
  display: flex;
  justify-content: space-between;
`;

export const Delete = styled.button`
  margin-left: 10px;
  width: 70px;
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
