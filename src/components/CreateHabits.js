import styled from "styled-components";
import Daysbuttons from "./Daysbuttons";

export default function CreateHabits({ isOpened, setIsOpened }) { 
  return (
    <ContainerForm isOpened={isOpened}>
      <HabitsContainer >
        <Input data-test="habit-name-input" placeholder="nome do hábito" disabled={false} />
        <Daysbuttons />
      </HabitsContainer>

      <ButtonsContainer data-test="habit-create-cancel-btn">
        <CloseButton type="button" onClick={() => setIsOpened(false)} disabled={false}> 
          Cancelar
        </CloseButton>

        <SaveButton  data-test="habit-create-save-btn" type="submit" disabled={false}>
          Salvar 
        </SaveButton>
      </ButtonsContainer>
    </ContainerForm>
  );
}

const ContainerForm = styled.form`
  display: ${(props) => props.isOpened ? "initial" : "none"};
  width: 100%;
  height: 180px;
  margin-bottom: 5px;
  padding: 18px;
  background: #FFFFFF;
  border-radius: 5px; 
  margin: auto;
  
`
const Input = styled.input`
  width: 303px;
  height: 45px;
  margin-bottom: 6px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};

  &::placeholder{
    color: #DBDBDB;
  }
`

const HabitsContainer = styled.div`
  margin-bottom: 25px;`

const ButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
gap: 15px;
margin-right: 65px;
`

const CloseButton = styled.button`
  width: 85px;
  height: 35px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: transparent;
  border-radius: 4px;
  font-size: 16px;
  line-height: 20px;
  color: #52B6FF;
  border: none;
`

const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: #52B6FF;
  border-radius: 5px;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  border: none;
`