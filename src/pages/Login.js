import styled from "styled-components";
import LogoImage from "../assets/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import loginAPI from "../server/loginAPI";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";


export default function Login(){
    const [loading, Setloading] = useState(false)
    const navigate = useNavigate();
    const [formulario, setFormulario] = useState({email: "", password: ""});

    const{setUser} = useContext(UserContext)

    function handleFormulario(e){
      setFormulario({...formulario, [e.target.name]: e.target.value});
      
    }

    function handleLogin(e){
      e.preventDefault()
      Setloading(true)
     
      loginAPI.login(formulario)
      .then( res => {
        Setloading(false)
        console.log(res.data)
        const {id, name, token, image} = res.data
        setUser({id, name, token, image})
        navigate("/hoje")
      })
        .catch(err => {
          Setloading(false)
          console.log(err.response.data)
          alert(err.response.data.message)
        })
    }

    return (
        <Container>
            <Logo src={LogoImage}/>
            <form onSubmit={handleLogin}>
            <LoginForm>
            <input data-test="email-input"
            type="email" 
            name="email"
            placeholder="email" 
            
            value={formulario.email}
            onChange={handleFormulario}
            required
            />

            <input  data-test="password-input" no input de senha do usuário
            type="password" 
            name="password"
            placeholder="senha" 
            
            value={formulario.password}
            onChange={handleFormulario}
            required
            />

            <button data-test="login-btn" type="submit" disabled={false}>  
            {loading ? (
                <ThreeDots width={40} height={40} color="#FFFFFF"/>) : "Entrar"}
            </button>

        </LoginForm>
            </form>
            <StyledLink data-test="signup-link" to="/cadastro">Não Possui uma conta? Cadastre-se</StyledLink>
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