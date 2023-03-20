import styled from "styled-components"
import { Link } from "react-router-dom"
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { ProgressContext } from "../contexts/Progress"
import { useContext } from "react"

export default function Menu(){
    const {progress} = useContext(ProgressContext)

    return(
        <MenuFooter data-test="menu">
            <StyledLink  test="habit-link" to="/habitos">Hábitos</StyledLink>

            <ContentProgressbar data-test="today-link">
            <CircularProgressbarContainer>
              <Link to="/hoje">
             <CircularProgressbar
             value={progress}
              text={"Hoje"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
          </Link>
        </CircularProgressbarContainer>

        <StyledLink  data-test="history-link" to="/historico">Históricos</StyledLink>

      </ContentProgressbar>
            
        </MenuFooter>
    )
}


const MenuFooter = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0px;
  bottom: 0px;
  background: #FFFFFF;
`
const StyledLink = styled(Link)`
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
    margin: 15%;
    text-decoration: none;

`
const ContentProgressbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`
const CircularProgressbarContainer = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  top: -30px;
  margin-right: 200px;
`