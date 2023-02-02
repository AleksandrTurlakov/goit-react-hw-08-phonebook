import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.b`
  font-weight: bold;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-weight: bold;
  border: inset;
  background-color: transparent;
  text-transform: capitalize;

  &:hover {
    background-color: rgb(245, 66, 11);
    color: white;
  }

  &:active {
    background-color: rgb(245, 66, 11);
    box-shadow: -4px 4px #666;
    transform: translateX(-8px);
  }
`;
