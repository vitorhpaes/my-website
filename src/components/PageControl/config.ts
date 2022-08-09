import { IconType } from 'react-icons'
import { FiHome, FiUser, FiMail, FiPackage } from 'react-icons/fi'

interface PageConfigProps {
    name: string
    Icon: IconType
}

type PageConfig = PageConfigProps[]

const pageConfig: PageConfig = [
    {
        name: 'Home',
        Icon: FiHome,
    },
    {
        name: 'Portfolio',
        Icon: FiPackage,
    },
    {
        name: 'About me',
        Icon: FiUser,
    },
    {
        name: 'Contact',
        Icon: FiMail,
    },
]

export default pageConfig
