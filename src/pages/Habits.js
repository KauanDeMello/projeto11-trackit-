import styled from "styled-components";
import { useState } from "react";
import Menu from "../components/Menu,";
import TopContainer from "../components/TopContainer";
import plusImage from "../assets/plus.svg";
import CreateHabits from "../components/CreateHabits";
import HabitosSalvados from "../components/HabitosSalvados";

export default function Habits(){
    const [isCreateFormOpened, setIsCreateFormOpened] = useState(false);

    return(
        <>
        <TopContainer/>
        
       <ContainerHabits>
        <TitleButtonDiv>
          <Title>Meus hábitos</Title>
          <Button onClick={() => setIsCreateFormOpened(true)}>
            <img src={plusImage} alt="Adicionar Ícone" />
          </Button>
        </TitleButtonDiv>
        <CreateHabits isOpened={isCreateFormOpened} setIsOpened={setIsCreateFormOpened}/> 
        <Subtitle>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Subtitle>
        <HabitosSalvados/>
        <HabitosSalvados/>
        <HabitosSalvados/>
        <Menu />
      </ContainerHabits>
        
        </>
    );
}

const ContainerHabits = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
`;

const Title = styled.p`
  font-size: 22px;
  line-height: 29px;
  color: #126BA5; 
  margin-left: 17px;
`;

const Button = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background-color: #52B6FF;
  border-radius: 5px;  
  margin-right: 18px;
`;

const Subtitle = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
  text-align: left;
  padding: 17px;
  margin-top: 28px;
  
`;
