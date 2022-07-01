import React from 'react'
import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import { useTheme } from '@mui/material'

const SocialMedia: React.FC = () => {
    const theme = useTheme()
    return (
        <>
            <FiTwitter color={theme.palette.grey[100]} />
            <FiInstagram color={theme.palette.grey[100]} />
            <FiLinkedin color={theme.palette.grey[100]} />
            <FiGithub color={theme.palette.grey[100]} />
        </>
    )
}

export default SocialMedia
