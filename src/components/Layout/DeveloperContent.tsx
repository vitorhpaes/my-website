import React from 'react'
import { SizeKey, styled } from '@mui/material'
import { borderRadius } from 'polished'
import SocialMedia from './../SocialMedia/SocialMedia'
import { Card } from '@ds'

interface StyledContentProps {
    left?: SizeKey
    right?: SizeKey
    top?: SizeKey
    bottom?: SizeKey
    radiusSide: 'top' | 'bottom' | 'left' | 'right'
}

const StyledCard = styled(Card)<StyledContentProps>`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;

    ${({ theme, top }) => top && `top: ${theme.size[top]}px;`}
    ${({ theme, bottom }) => bottom && `bottom: ${theme.size[bottom]}px;`}
    ${({ theme, left }) => left && `left: ${theme.size[left]}px;`}
    ${({ theme, right }) => right && `right: ${theme.size[right]}px;`}

    ${({ theme, radiusSide }) => borderRadius(radiusSide, theme.size.small)}
`

const DeveloperContent: React.FC = () => {
    return (
        <StyledCard top="large" right="none" radiusSide="left">
            <SocialMedia
                twitter="https://twitter.com/vitor__paes"
                instagram="https://www.instagram.com/vitorhpaes"
                linkedin="https://www.linkedin.com/in/vitor-paes-2880541b2"
                github="https://github.com/vitorhpaes"
            />
        </StyledCard>
    )
}

export default DeveloperContent
