import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../assets/logo.svg"
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import signupAPI from "../server/signupAPI";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Register(){
    const navigate = useNavigate()
    const [formulario, setFormulario] = useState({email: "", password: "", name:"", image:""});
    const [loading, Setloading] = useState(false)

    function handleFormulario(e){
      setFormulario({...formulario, [e.target.name]: e.target.value});
      
    }

    const{setUser} = useContext(UserContext)

    function handleSignup(e){
      e.preventDefault()
      Setloading(true)

      signupAPI.signup(formulario).then(res => {
        Setloading(false)
        const {email, password, name, image} = res.data
        setUser({email, password, name, image})
        console.log(res.data)
        navigate("/")
      })
      .catch(err => {
        Setloading(false)
        alert(err.response.data.message)
      })
    }

  
    
    return (
      
        <Container>
            <Logo src={LogoImage}/>
            <form onSubmit={handleSignup}>
            <LoginForm>
                <input
                 type="email" 
                 name="email"
                 placeholder="email" 
                 
                 value={formulario.email}
                 onChange={handleFormulario}
                 required
                 />
                  


                <input
                type="password" 
                name="password"
                placeholder="senha" 
                
                value={formulario.password}
                onChange={handleFormulario}
                required
                />


                <input
                type="text" 
                name="name"
                placeholder="nome"
                value={formulario.name}
                onChange={handleFormulario}
                required 
                />


                <input 
                type="url" 
                name="image"
                placeholder="foto"
                value={formulario.image}
                onChange={handleFormulario}
                required />


                <button type="submit" disabled={loading}> {loading ? (
                <ThreeDots width={40} height={40} color="#FFFFFF" />) : "Cadastrar"}</button>
            </LoginForm>
            </form>
            <StyledLink to={"/"}>Já tem uma conta? faça login!</StyledLink>
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
    margin-top: 20px;
    align-self: flex-start;
    padding-left: 50px;
  `