import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Error() {
  return (
    <>
      <Mensagem>Usuário e/ou senha inválidos, tente novamente!</Mensagem>
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </>
  ) 
}

const Mensagem = styled.p`
  margin-top: 50px ;
  font-weight: 400;
  font-size: 20px;
`

const Button = styled.div`
margin-top: 20px;
  text-align: center;
  background: #52B6FF;
  border: 1px solid #52B6FF;
  border-radius: 5px;
  margin-bottom: 6px;
`