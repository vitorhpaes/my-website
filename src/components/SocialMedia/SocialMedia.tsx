import React from 'react'
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import { Link, styled, useTheme } from '@mui/material'
import { Spacing } from '@ds'
import { isMobile } from '@app/drivers/device'

interface SocialMediaProps {
    twitter: string
    instagram: string
    linkedin: string
    github: string
}

interface StyledSocialMediaProps {
    isMobile: boolean
}

const StyledSocialMedia = styled(Spacing)<StyledSocialMediaProps>`
    display: flex;
    ${({ isMobile, theme }) => !isMobile && `gap: ${theme.size.medium}px;`}
    ${({ isMobile }) => isMobile && `width: 100%`}
    flex-direction: ${({ isMobile }) => (isMobile ? 'row' : 'column')};
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const SocialMedia: React.FC<SocialMediaProps> = ({
    twitter,
    instagram,
    linkedin,
    github,
}) => {
    const theme = useTheme()
    const isDeviceMobile = isMobile()
    return (
        <StyledSocialMedia px="small" py="small" isMobile={isDeviceMobile}>
            <Link href={twitter} target="_blank">
                <FiTwitter
                    size={theme.size.large}
                    color={theme.palette.grey[100]}
                />
            </Link>
            <Link href={instagram} target="_blank">
                <FiInstagram
                    size={theme.size.large}
                    color={theme.palette.grey[100]}
                />
            </Link>
            <Link href={linkedin} target="_blank">
                <FiLinkedin
                    size={theme.size.large}
                    color={theme.palette.grey[100]}
                />
            </Link>
            <Link href={github} target="_blank">
                <FiGithub
                    size={theme.size.large}
                    color={theme.palette.grey[100]}
                />
            </Link>
        </StyledSocialMedia>
    )
}

export default SocialMedia
