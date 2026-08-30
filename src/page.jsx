import { FormattedMessage } from "react-intl"
import metadata from "./lib/metadata.js"

const Page = ({url}) => {
    return (
        <div>
            {(url === "/") ? (
                <div>
                    <h1><FormattedMessage
                        id="label"
                        value={{ name: metadata.name }}
                    /></h1>
                </div>
            ) : (url === "/client" || url === "/client.html") ? (
                <div></div>
            ) : null}
        </div>
    )
}

export default Page