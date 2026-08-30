import { useState } from "react"

const translations = {
    en: {
        settings: "settings",
        status: "status",
        "main.label": "[name] - Messenger of new gen!",
        "main.webclient.link": "Use web version",
        "footer.platform": "Official, [name] v[version]",
        "login.title": "Login",
        "login.button": "login"
    },
    ru: {
        settings: "настройки",
        status: "статус",
        "main.label": "[name] - Мессенджер нового поколения!",
        "main.webclient.link": "Использовать веб-версию",
        "footer.platform": "Официально, [name] v[version]",
        "login.title": "Вход",
        "login.button": "Войти"
    }
}

const [ locale, setLocale ] = useState("en")

export default translations
export { locale, setLocale }
