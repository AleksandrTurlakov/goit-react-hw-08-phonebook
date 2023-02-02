import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  padding: 5px;
  margin-bottom: 16px;
  border-style: 1px solid #2a363b;
  border-radius: 12px;

  box-shadow: rgb(0 0 0 / 19%) 0px 8px 20px 0px, rgb(0 0 0 / 23%) 0px 6px 6px;

  background: #a8ff78; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #78ffd6,
    #a8ff78
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #78ffd6,
    #a8ff78
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
