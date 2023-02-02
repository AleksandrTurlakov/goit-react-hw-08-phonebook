import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 50px);
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 48;
  text-align: center;
`;

const Span = styled.span`
  font-size: 100px;
  margin-bottom: 100px;
`;

export default function Home() {
  return (
    <Container>
      <Title>
        Welcome to Phonebook App
        <Span role="img" aria-label="Icon">
          ☎
        </Span>
        Please, Register or Login to have access to the Phonebook!
      </Title>
    </Container>
  );
}
