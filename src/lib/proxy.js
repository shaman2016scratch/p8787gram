import { useState } from "react";

const [ apiUrl, setApiUrl ] = useState("")
const [ useProxy, setUseProxy ] = useState(false)

export {
    apiUrl,
    setApiUrl,
    useProxy,
    setUseProxy
}