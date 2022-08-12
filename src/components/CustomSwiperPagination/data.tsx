import React from 'react'
import { FiHome, FiUser, FiPackage } from 'react-icons/fi'
import { TiSocialAtCircular } from 'react-icons/ti'

interface PageConfigProps {
    translationKey: string
    Icon: React.ReactNode
}

type PageConfig = PageConfigProps[]

const pageConfig: PageConfig = [
    {
        translationKey: 'home',
        Icon: <FiHome size={20} />,
    },
    {
        translationKey: 'social',
        Icon: <TiSocialAtCircular size={20} />,
    },
    {
        translationKey: 'portfolio',
        Icon: <FiPackage size={20} />,
    },
    {
        translationKey: 'aboutMe',
        Icon: <FiUser size={20} />,
    },
]

export default pageConfig
