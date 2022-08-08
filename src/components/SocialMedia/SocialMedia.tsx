import React from 'react'
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import { Link, useTheme } from '@mui/material'
import Spacing from '@ds/Spacing/Spacing'

interface SocialMediaProps {
    twitter: string
    instagram: string
    linkedin: string
    github: string
}

const SocialMedia: React.FC<SocialMediaProps> = ({
    twitter,
    instagram,
    linkedin,
    github,
}) => {
    const theme = useTheme()
    return (
        <Spacing mr="large">
            <Spacing mr="medium">
                <Link href={twitter} target="_blank">
                    <FiTwitter
                        size={theme.size.standard}
                        color={theme.palette.grey[100]}
                    />
                </Link>
            </Spacing>
            <Spacing mr="medium">
                <Link href={instagram} target="_blank">
                    <FiInstagram
                        size={theme.size.standard}
                        color={theme.palette.grey[100]}
                    />
                </Link>
            </Spacing>
            <Spacing mr="medium">
                <Link href={linkedin} target="_blank">
                    <FiLinkedin
                        size={theme.size.standard}
                        color={theme.palette.grey[100]}
                    />
                </Link>
            </Spacing>
            <Spacing mr="medium">
                <Link href={github} target="_blank">
                    <FiGithub
                        size={theme.size.standard}
                        color={theme.palette.grey[100]}
                    />
                </Link>
            </Spacing>
        </Spacing>
    )
}

export default SocialMedia
