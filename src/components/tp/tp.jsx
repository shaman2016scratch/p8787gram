import metadata from "../../lib/metadata.js";
import "./tp.css"

const TopPanel = () => {
	return (
		<div class="top-panel">
            <a href="/p8787gram/">
                {metadata.name}
            </a>
        </div>
	)
}

export default TopPanel