import Login from "./pages/Login"
import Register from "./pages/Register"
import Habits from "./pages/Habits"
import Today from "./pages/Today"
import History from "./pages/History"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { UserContext } from "./contexts/UserContext"
import { ProgressContext } from "./contexts/Progress"


export default function App(){

    const [user, setUser] = useState({})
    const [progress, setProgress] = useState(0)
  
    return(
        <BrowserRouter>
         <ProgressContext.Provider value={{ progress, setProgress}}>

         <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path= "/" element={<Login />}/>
                <Route path= "/cadastro" element={<Register/>}/>
                <Route path= "/habitos" element={<Habits/>}/>
                <Route path= "/hoje" element={<Today/>}/>
                <Route path= "/historico" element={<History/>}/>
            </Routes>

        </UserContext.Provider>
         </ProgressContext.Provider>
       
        </BrowserRouter>
    )

}