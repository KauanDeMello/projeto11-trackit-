import Login from "./pages/Login"
import Register from "./pages/Register"
import Habits from "./pages/Habits"
import Today from "./pages/Today"
import History from "./pages/History"
import Error from "./pages/Error"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { UserContext } from "./contexts/User"


export default function App(){

    const [user, setUser] = useState({})
  
    return(
        <BrowserRouter>
        <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path= "/" element={<Login />}/>
                <Route path= "/cadastro" element={<Register/>}/>
                <Route path= "/habitos" element={<Habits/>}/>
                <Route path= "/hoje" element={<Today/>}/>
                <Route path= "/historico" element={<History/>}/>
                <Route path= "/erro" element={<Error/>}/>
            </Routes>
        </UserContext.Provider>
        </BrowserRouter>
    )

}
