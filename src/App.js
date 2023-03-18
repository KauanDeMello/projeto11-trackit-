import Login from "./pages/Login"
import Register from "./pages/Register"
import Habits from "./pages/Habits"
import Today from "./pages/Today"
import History from "./pages/History"
import { BrowserRouter, Route, Routes } from "react-router-dom"



export default function App(){
  
    return(
        <BrowserRouter>
        <Routes>
            <Route path= "/" element={<Login />}/>
            <Route path= "/cadastro" element={<Register/>}/>
            <Route path= "/habitos" element={<Habits/>}/>
            <Route path= "/hoje" element={<Today/>}/>
            <Route path= "/historico" element={<History/>}/>
        </Routes>
        </BrowserRouter>
    )

}
