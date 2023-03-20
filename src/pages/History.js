import styled from "styled-components";
import Menu from "../components/Menu,";
import TopContainer from "../components/TopContainer";

export default function History(){
    return(
        <>

        <TopContainer/>
        <Container>
        <TitleHistory>Histórico</TitleHistory>
        <HistoricoText>Em breve você poderá ver o histórico dos seus hábitos aqui!</HistoricoText>
        </Container>
        <Menu/>

        </>
        
    )
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleHistory = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #126BA5; 
  align-self: flex-start;
  padding-left: 17px;`

  const HistoricoText = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    padding-left: 17px;
    color: #666666;
    padding: 15px;
  `