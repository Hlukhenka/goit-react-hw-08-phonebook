import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-right: 20px;
  align-items: center;
`;

export const Mail = styled.p`
  font-weight: 500;
`;

export const LogoutBtn = styled.button`
  border: none;
  outline: none;
  padding: 0px 15px;
  width: 75px;
  height: 30px;
  border-radius: 10px;
  background-color: #ccc;
  font-size: 14px;
  line-height: 1.2;
  cursor: pointer;

  :hover {
    background-color: lightblue;
  }
`;
