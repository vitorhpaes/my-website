import React from 'react'

import darkBackground from '@app/assets/images/background_dark.jpg'
import { styled } from '@mui/material'
import { Spacing } from '@ds'
import { rgba } from 'polished'
import ChangeThemeButton from '@app/components/SystemConfigButtons/ChangeThemeButton'
import ChangeLanguageButton from '@app/components/SystemConfigButtons/ChangeLanguageButton'

const StyledBackground = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${darkBackground});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`

const StyledCard = styled('div')`
    font-family: 'Comfortaa';
    user-select: none;
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) =>
        rgba(theme.palette.background.paper, 0.7)};
    border-radius: ${({ theme }) => theme.size.quarck}px;
    box-shadow: ${({ theme }) => theme.shadows[11]};
    font-size: 45px;
    line-height: 55px;
    font-weight: 400;
`

const HomePage: React.FC = () => {
    return (
        <StyledBackground>
            <ChangeThemeButton />
            <ChangeLanguageButton />
            <StyledCard>
                <Spacing px="medium" py="small">
                    Hi, i'm Vitor
                </Spacing>
            </StyledCard>
        </StyledBackground>
    )
}

export default HomePage
