import { useState } from "react"

const translations = {
    en: {
        settings: "settings",
        status: "status",
        label: "[name] - Messenger new gen!" // TODO: fix english
    },
    ru: {
        settings: "настройки",
        status: "статус",
        label: "[name] - Мессенджер нового поколения!"
    }
}

const [ locale, setLocale ] = useState("en")

export default translations
export { locale, setLocale }