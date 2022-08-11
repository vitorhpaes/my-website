import React from 'react'
import { FiHome, FiUser, FiPackage } from 'react-icons/fi'
import { TiSocialAtCircular } from 'react-icons/ti'

interface PageConfigProps {
    name: string
    Icon: React.ReactNode
}

type PageConfig = PageConfigProps[]

const pageConfig: PageConfig = [
    {
        name: 'Home',
        Icon: <FiHome size={20} />,
    },
    {
        name: 'Social',
        Icon: <TiSocialAtCircular size={25} />,
    },
    {
        name: 'Portfolio',
        Icon: <FiPackage size={30} />,
    },
    {
        name: 'About me',
        Icon: <FiUser size={30} />,
    },
]

export default pageConfig
