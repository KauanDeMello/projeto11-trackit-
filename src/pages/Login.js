import styled from "styled-components";
import LogoImage from "../assets/logo.svg"

export default function Login(){
    return (
        <Container>
            <Logo src={LogoImage}/>
        </Container>
    )
}

const Container = styled.div`

min-height: 100vh;
width: 100%;
padding: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #E5E5E5;`

const Logo = styled.img`
      height: auto;
`
