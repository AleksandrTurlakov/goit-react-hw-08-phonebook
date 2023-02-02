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

export default function Home() {
  return (
    <Container>
      <Title>
        Welcome to Phonebook App
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
