import { FormattedMessage } from "react-intl"
import metadata from "./lib/metadata.js"
import WebClient from "./pages/client/index.jsx"

const Page = ({url}) => {
    return (
        <>
            {(url === "/") ? (
                <div>
                    <h1><FormattedMessage
                        id="main.label"
                        value={{ name: metadata.name }}
                    /></h1>
                    <p><a href="./client"><FormattedMessage
                        id="main.webclient.link"
                    /></a></p>
                </div>
            ) : (url === "/client" || url === "/client.html") ? (
                <WebClient />
            ) : null}
        </>
    )
}

export default Page