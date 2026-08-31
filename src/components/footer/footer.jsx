import { FormattedMessage } from "react-intl";
import metadata from "../../lib/metadata.js";
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div class="container">
				<p class='footer-text'>🄯 GNU GPL v3</p>
                <p class='footer-text'><FormattedMessage
                    id="footer.platform"
                    values={{
                        name: metadata.name,
                        version: metadata.version
                    }}
                /></p>
            </div>
        </footer>
    )
}

export default Footer