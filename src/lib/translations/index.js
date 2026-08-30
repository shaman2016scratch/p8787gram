import { useState } from "react"

const translations = { /* TODO: Fix English */
    en: {
        settings: "settings",
        status: "status",
        "main.label": "[name] - Messenger new gen!",
        "main.webclient.link": "Use web version",
        "footer.platform": "Official, [name] v[version]"
    },
    ru: {
        settings: "настройки",
        status: "статус",
        "main.label": "[name] - Мессенджер нового поколения!",
        "main.webclient.link": "Использовать веб-версию",
        "footer.platform": "Официально, [name] v[version]"
    }
}

const [ locale, setLocale ] = useState("en")

export default translations
export { locale, setLocale }