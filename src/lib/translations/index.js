import { useState } from "react"

const translations = {
    en: {
        settings: "settings",
        status: "status",
        "main.label": "[name] - Messenger new gen!", // TODO: fix english
        "main.webclient.link": "Web version"
    },
    ru: {
        settings: "настройки",
        status: "статус",
        "main.label": "[name] - Мессенджер нового поколения!",
        "main.webclient.link": "Веб-версия"
    }
}

const [ locale, setLocale ] = useState("en")

export default translations
export { locale, setLocale }