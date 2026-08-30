import metadata from "./metadata.js"

const getVersion = async () => {
    const URL = metadata.apiUrl
    const req = await fetch(URL, {
        method: "GET",
        headers: {
            "bypass-tunnel-reminder": true
        }
    })
    const res = await req.json()
    return res.result.version
}

export {
    getVersion
}