import React from 'react'
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import { Link, styled, useTheme } from '@mui/material'
import { Spacing } from '@ds'

interface SocialMediaProps {
    twitter: string
    instagram: string
    linkedin: string
    github: string
}

const StyledSocialMedia = styled(Spacing)`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const StyledLink = styled(Link)`
    margin-top: ${({ theme }) => theme.size.small}px;
`

const SocialMedia: React.FC<SocialMediaProps> = ({
    twitter,
    instagram,
    linkedin,
    github,
}) => {
    const theme = useTheme()
    return (
        <StyledSocialMedia px="small" py="small">
            <StyledLink href={twitter} target="_blank">
                <FiTwitter
                    size={theme.size.large}
                    color={theme.palette.grey[100]}
                />
            </StyledLink>
            <StyledLink href={instagram} target="_blank">
                <FiInstagram
                    size={theme.size.large}
                    color={theme.palette.grey[100]}
                />
            </StyledLink>
            <StyledLink href={linkedin} target="_blank">
                <FiLinkedin
                    size={theme.size.large}
                    color={theme.palette.grey[100]}
                />
            </StyledLink>
            <StyledLink href={github} target="_blank">
                <FiGithub
                    size={theme.size.large}
                    color={theme.palette.grey[100]}
                />
            </StyledLink>
        </StyledSocialMedia>
    )
}

export default SocialMedia
