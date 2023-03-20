import styled from "styled-components";
import Menu from "../components/Menu,";
import TopContainer from "../components/TopContainer";
import Tasks from "../components/Task";

export default function Today(){
   return(
    <>
   
   <TopContainer/>

    <ContainerToday>
        <Titleday>Segunda, 17/05</Titleday>
        <Texto doneAmount={0}>
          Nenhum hábito concluído
        </Texto>

        <Tasks/>

        <Tasks/>
        
        <Tasks/>
    <Menu/>   
    </ContainerToday>
   
   </>
   )
   
}

const ContainerToday = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Titleday = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #126BA5; 
  align-self: flex-start;
  padding-left: 17px;
`
const Texto = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 28px;
  color: ${(props) => props.doneAmount !== 0 ? "#8FC549" : "#BABABA"};
  align-self: flex-start;
  padding-left: 17px;
`
