import { addCustom } from ".";
import translations, { addCustom } from "./";

let customLangs = []
let customTrans = {}

const mergeTrans = () => {
    let ret = translations
    for (let i = 0; i < customLangs.length; i++) {
        ret = addCustom(ret, customLangs[i], customTrans(customLangs[i]))
    }
    return ret
}

const addTrans = async (tranUrl, id) => {
    const tran = await (await fetch(tranUrl)).json()
    customLangs.push(id)
    customTrans[id] = tranUrl
}

export {
    customLangs,
    customTrans,
    mergeTrans
}