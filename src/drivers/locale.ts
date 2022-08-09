import ptBR from '../config/messages/ptBR.json'
import enGB from '../config/messages/enGB.json'

const locales = {
    enGB: {
        language: 'enGB',
        messages: enGB,
    },
    ptBR: {
        language: 'ptBR',
        messages: ptBR,
    },
}

const getIntlConfiguration = (currentLanguage: 'ptBR' | 'enGB') =>
    locales[currentLanguage]

export default getIntlConfiguration
