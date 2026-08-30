import metadata from "../../lib/metadata.js";

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