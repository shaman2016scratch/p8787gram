import metadata from "../../lib/metadata.js"
import { FormattedMessage } from "react-intl"
import "./tp.css"

const TopPanel = () => {
	return (
		<div class="top-panel">
            <a href="/p8787gram/">
                {metadata.name}
            </a>
            <FormattedMessage id="main.webclient" />
        </div>
	)
}

export default TopPanel