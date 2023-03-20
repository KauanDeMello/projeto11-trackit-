import Dump from "../assets/dump.svg"
import styled from "styled-components"
import Daysbuttons from "./Daysbuttons"

export default function HabitosSalvados(){
    return(
        <Container>
            <Title>Ler 1 capítulo de livro</Title>
            <Daysbuttons/>
            <img src={Dump} alt="Lixeira"/>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px;
  margin: 5px 0;
  background: #FFFFFF;
  border-radius: 5px;
  position: relative;
  margin-left: 50px;
  

  img {
    width: 15px;
    position: absolute;
    top: 20px;
    right: 80px;
  }
`

const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;
  word-break: break-all;
  width: 80%;
  color: #666666;
 
`