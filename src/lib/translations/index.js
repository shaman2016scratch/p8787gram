const translations = {
    en: {
        settings: "settings",
        status: "status",
        "main.label": "{name} - Messenger of new gen!",
        "main.webclient.link": "Use web version",
        "footer.platform": "Official, {name} v{version}",
        "login.title": "Login",
        "login.button": "login",
        "login.toReg": "Switch to register",
        "register.title": "Register",
        "register.button": "register",
        "register.toLogin": "Switch to login",
        "main.webclient": "Web-version"
    },
    ru: {
        settings: "настройки",
        status: "статус",
        "main.label": "{name} - Мессенджер нового поколения!",
        "main.webclient.link": "Использовать веб-версию",
        "footer.platform": "Официально, {name} v{version}",
        "login.title": "Вход",
        "login.button": "Войти",
        "login.toReg": "Перейти к регестрации",
        "register.title": "Регестрация",
        "register.button": "Зарегистрироваться",
        "register.toLogin": "Перейти к входу",
        "main.webclient": "Веб-версия"
    }
}

let locale = "en"
const setLocale = (v) => {
    locale = v
}

const addCustom = (o, l, d) => {
    o[l] = d
    return o
}

export default translations
export { locale, setLocale, addCustom }
