import { useState } from "react"
import Chats from "../../components/chats/chats.js"
import "./index.css"

const WebClient = () => {
    const [ token, setToken ] = useState(localStorage.getItem("token"))
    cosnt [ openedChatId, setOpenedChatId ] = useState(null)
    return (
        <div>
            { token ? (
                <Chats
                    token={token}
					onChatSelect={(id) => setOpenedChatId(id)}
					selectedChatId={openedChatId}
                />
            ) : null }
        </div>
    )
}

export default WebClient