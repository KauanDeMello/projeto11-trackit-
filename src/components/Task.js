import styled from "styled-components";
import Check from "../assets/check.svg";

export default function Tasks() {
  return (
    <Container>
      <TitleContainer>
        <LeftContainer data-test="today-habit-container" >
          <Title>Ler 1 capítulo de livro</Title>
          <Sequence>Sequência atual: 4 dias</Sequence>
          <Record>Seu recorde: 5 dias</Record>
        </LeftContainer>
        <CheckMarkContainer data-test="today-habit-check-btn">
          <img src={Check} alt="Check" />
        </CheckMarkContainer>
      </TitleContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  margin-bottom: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 17px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  line-height: 25px;
  font-size: 20px;
  word-break: break-all;
  color: #666666;
  margin-bottom: 5px;
`;

const Sequence = styled.p`
  font-size: 13px;
  line-height: 16px;
  color: #666666;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  margin: 0;
`;

const Record = styled.p`
  font-size: 13px;
  line-height: 16px;
  color: #666666;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  margin: 0;
`;

const CheckMarkContainer = styled.div`
  width: 69px;
  height: 69px;
  background-color: #8fc549;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 13px;
`;
