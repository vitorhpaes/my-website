import { linearGradient, rgba } from 'polished'

const instagramColorStops = [
    `${rgba('#f09433', 0.7)} 0%`,
    `${rgba('#e6683c', 0.7)} 25%`,
    `${rgba('#dc2743', 0.5)} 50%`,
    `${rgba('#cc2366', 0.3)} 70%`,
    `${rgba('#bc1888', 0.2)} 100%`,
]

const defaultCreateLinearGradient = (
    defaultColor: string,
    defaultBackground: string
) => {
    const colorWithTransparency = rgba(defaultColor, 0.4)
    return linearGradient({
        colorStops: [
            `${colorWithTransparency} 60%`,
            `${rgba(defaultColor, 0.2)} 100%`,
        ],
        fallback: defaultBackground,
        toDirection: 'to right',
    })
}

export default {
    default: {
        createGradient: (defaultBackground: string) =>
            defaultCreateLinearGradient('#c22a1e', defaultBackground),
        borderColor: '#000000',
    },
    linkedin: {
        createGradient: (defaultBackground: string) =>
            defaultCreateLinearGradient('#0a66c2', defaultBackground),
        borderColor: '#0a66c2',
    },
    github: {
        createGradient: (defaultBackground: string) =>
            defaultCreateLinearGradient('#161b22', defaultBackground),
        borderColor: '#161b22',
    },
    twitter: {
        createGradient: (defaultBackground: string) =>
            defaultCreateLinearGradient('#1da1f2', defaultBackground),
        borderColor: '#1da1f2',
    },
    instagram: {
        createGradient: () =>
            linearGradient({
                colorStops: instagramColorStops,
                toDirection: 'to right',
            }),
        borderColor: '#e6683c',
    },
    whatsapp: {
        createGradient: (defaultBackground: string) =>
            defaultCreateLinearGradient('#25d366', defaultBackground),
        borderColor: '#25d366',
    },
    google: {
        createGradient: (defaultBackground: string) =>
            defaultCreateLinearGradient('#db4437', defaultBackground),
        borderColor: '#db4437',
    },
    spotify: {
        createGradient: (defaultBackground: string) =>
            defaultCreateLinearGradient('#1ed760', defaultBackground),
        borderColor: '#1ed760',
    },
}
