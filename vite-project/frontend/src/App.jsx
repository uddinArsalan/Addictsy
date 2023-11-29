import Homepage from "./Homepage"
import {Route ,Routes} from "react-router-dom"
import Login from "./Login Page/Login";
import { UserContext } from "./Context/UserContext"
import Chat from './Chat Component/Chat'

export default function App() {
  
  return (
    <UserContext>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="chat" element={<Chat />} />
    </Routes>
    </UserContext>
  )
}

