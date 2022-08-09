import enGB from '../config/messages/enGB.json'
import ptBR from '../config/messages/ptBR.json'

const locales = {
    ptBR: {
        language: 'pt-br',
        messages: ptBR,
    },
    enGB: {
        language: 'en-gb',
        messages: enGB,
    },
}

const getIntlConfiguration = (currentLanguage: 'ptBR' | 'enGB') =>
    locales[currentLanguage]

export default getIntlConfiguration
