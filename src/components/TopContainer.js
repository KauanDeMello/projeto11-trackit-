import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import miniLogoImage from "../assets/miniLogo.svg"
import { UserContext } from "../contexts/UserContext";

export default function TopContainer(){

    const {user} = useContext(UserContext)

    return(
        <Container>
            <Link to="/hoje">
            <Logomini src={miniLogoImage}/></Link>
          <Userimg src={user.image}/>
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
const Userimg = styled.img`
    border-radius: 50%;
    width: 51px;
    height: 51px;
    margin-left: 250px;
`

