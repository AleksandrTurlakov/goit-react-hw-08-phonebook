import styled from 'styled-components';

export const WrapLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  width: 600px;
  border-radius: 12px;
  margin: 0 auto;
  padding: 0 16px 16px;
  min-height: calc(100vh - 50px);
  box-shadow: rgb(0 0 0 / 19%) 0px 8px 20px 0px, rgb(0 0 0 / 23%) 0px 6px 6px;

  background: #aaffa9;
  background: -webkit-linear-gradient(to bottom, #11ffbd, #aaffa9);
  background: linear-gradient(to bottom, #11ffbd, #aaffa9);
`;
