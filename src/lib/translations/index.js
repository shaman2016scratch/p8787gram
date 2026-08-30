const translations = {
    en: {
        settings: "settings",
        status: "status",
        "main.label": "{name}} - Messenger of new gen!",
        "main.webclient.link": "Use web version",
        "footer.platform": "Official, {name} v{version}",
        "login.title": "Login",
        "login.button": "login",
        "register.title": "Register",
        "register.button": "register"
    },
    ru: {
        settings: "настройки",
        status: "статус",
        "main.label": "[name] - Мессенджер нового поколения!",
        "main.webclient.link": "Использовать веб-версию",
        "footer.platform": "Официально, {name} v{version}",
        "login.title": "Вход",
        "login.button": "Войти",
        "register.title": "Регестрация",
        "register.button": "Зарегистрироваться"
    }
}

let locale = "en"
const setLocale = (v) => {
    locale = v
}

export default translations
export { locale, setLocale }
