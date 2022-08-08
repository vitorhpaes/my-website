import React from 'react'
import { SizeKey, styled } from '@mui/material'
import { borderRadius, rgba } from 'polished'
import { Spacing } from '@ds'
import SocialMedia from './../SocialMedia/SocialMedia'

interface StyledContentProps {
    left?: SizeKey
    right?: SizeKey
    top?: SizeKey
    bottom?: SizeKey
    radiusSide: 'top' | 'bottom' | 'left' | 'right'
}

const StyledContent = styled('div')<StyledContentProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: ${({ theme }) => theme.shadows['5']};
    background-color: ${({ theme }) => rgba(theme.palette.grey[800], 0.7)};
    position: fixed;

    ${({ theme, top }) => top && `top: ${theme.size[top]}px;`}
    ${({ theme, bottom }) => bottom && `bottom: ${theme.size[bottom]}px;`}
    ${({ theme, left }) => left && `left: ${theme.size[left]}px;`}
    ${({ theme, right }) => right && `right: ${theme.size[right]}px;`}

    ${({ theme, radiusSide }) => borderRadius(radiusSide, theme.size.small)}
`

const DeveloperContent: React.FC = () => {
    return (
        <StyledContent top="largeXX" right="none" radiusSide="left">
            <SocialMedia
                twitter="https://twitter.com/vitor__paes"
                instagram="https://www.instagram.com/vitorhpaes"
                linkedin="https://www.linkedin.com/in/vitor-paes-2880541b2"
                github="https://github.com/vitorhpaes"
            />
        </StyledContent>
    )
}

export default DeveloperContent
