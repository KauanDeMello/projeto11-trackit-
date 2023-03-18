import styled from "styled-components";
import miniLogoImage from "../assets/miniLogo.svg"

export default function TopContainer(){

    return(
        <Container>
          <Logomini src={miniLogoImage}/>
          <User> TESTE </User>
        </Container> 
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Logomini = styled.img`
    position: fixed;
    width: 94px;
    height: 49px;
    left: 18px;
    top: 10px;
    color: #FFFFFF;
`
const User = styled.div`
    margin-left: 250px;
`

