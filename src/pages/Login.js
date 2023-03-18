import styled from "styled-components";
import LogoImage from "../assets/logo.svg"
import { Link } from "react-router-dom";


export default function Login(){

 

    return (
        <Container>
            <Logo src={LogoImage}/>
            <LoginForm>
                <input placeholder="email" disabled={false}/>
                <input placeholder="senha" disabled={false}/>
                <button disabled={false}>Entrar</button>
            </LoginForm>
            <StyledLink to="/cadastro">Não Possui uma conta? Cadastre-se</StyledLink>
        </Container>
    )
}

const Container = styled.div`

min-height: 100%;
margin-top: 60px;
width: auto;
padding: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #FFFFFF;`

const Logo = styled.img`
      height: auto;
      background-color: FFFFFF;
`
const LoginForm = styled.label`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 20px 0;
  font-size: 18px;


  input {
    width: 300px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    

    &::placeholder {
      font-family: 'Lexend Deca';
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 25px;
      color: #DBDBDB;
      padding-left: 6px;
    }
  }

  button {
    align-self: center;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border: 1px solid #52B6FF;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;

  }
`;

  const StyledLink = styled(Link)`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    align-self: center;
  `