import { SocialMediaName } from '@ds'

export interface SocialMediaProps {
    network: {
        name: SocialMediaName
        actionMessageKey: string
    }
    username: string
    link: string
}

const socialContentMocked: SocialMediaProps[] = [
    {
        network: {
            name: 'linkedin',
            actionMessageKey: 'toConnect',
        },
        username: 'Mid front-end developer',
        link: 'https://www.linkedin.com/in/vitor-paes-2880541b2/',
    },
    {
        network: {
            name: 'whatsapp',
            actionMessageKey: 'messageMe',
        },
        username: '+55 (49) 98425-5974',
        link: 'https://wa.me/5549984255974?text=Ol%C3%A1%20V%C3%ADtor.',
    },
    {
        network: {
            name: 'instagram',
            actionMessageKey: 'follow',
        },
        username: '@vitorhpaes',
        link: 'https://www.instagram.com/vitorhpaes/',
    },
    {
        network: {
            name: 'twitter',
            actionMessageKey: 'follow',
        },
        username: '@vitor__paes',
        link: 'https://twitter.com/vitor__paes',
    },
    {
        network: {
            name: 'google',
            actionMessageKey: 'mailMe',
        },
        username: 'vhspaes@gmail.com',
        link: 'mailto:vhspaes@gmail.com',
    },
]

export default socialContentMocked
