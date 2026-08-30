import { useState } from "react"
import Chats from "../../components/chats/chats.js"
import LoginComponent from "../../components/login/login.jsx"
import "./index.css"

const WebClient = () => {
    const [ token, setToken ] = useState(localStorage.getItem("p8787gram-session"))
    const [ openedChatId, setOpenedChatId ] = useState(null)
    const handleSetToken = (newToken) => {
        localStorage.setItem("p8787gram-session", newToken)
        setToken(newToken)
    }
    return (
        <div>
            { token ? (
                <Chats
                    token={token}
					onChatSelect={(id) => setOpenedChatId(id)}
					selectedChatId={openedChatId}
                />
            ) : (
                <div class="login-container"><LoginComponent setToken={handleSetToken} /></div>
            ) }
        </div>
    )
}

export default WebClient