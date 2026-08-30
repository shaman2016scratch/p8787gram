import { useState } from "react"

const translations = {
    en: {},
    ru: {}
}

const [ locale, setLocale ] = useState("en")

export default translations
export { locale, setLocale }