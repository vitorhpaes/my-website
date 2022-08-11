import { SocialMediaName } from '@ds'

export interface SocialMediaProps {
    network: {
        name: SocialMediaName
        actionMessageKey: string
    }
    username: string
}

const socialContentMocked: SocialMediaProps[] = [
    {
        network: {
            name: 'linkedin',
            actionMessageKey: 'connect',
        },
        username: 'Mid front-end developer',
    },
    {
        network: {
            name: 'whatsapp',
            actionMessageKey: 'messageMe',
        },
        username: '+55 (49) 98425-5974',
    },
    {
        network: {
            name: 'instagram',
            actionMessageKey: 'follow',
        },
        username: '@vitorhpaes',
    },
    {
        network: {
            name: 'twitter',
            actionMessageKey: 'follow',
        },
        username: '@vitor__paes',
    },
    {
        network: {
            name: 'google',
            actionMessageKey: 'mailMe',
        },
        username: 'vhspaes@gmail.com',
    },
]

export default socialContentMocked
