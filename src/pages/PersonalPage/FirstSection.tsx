import React from 'react'
import darkBackground from '@app/assets/images/background_dark.jpg'
import lightBackground from '@app/assets/images/background_light.jpg'

import { styled, Typography } from '@mui/material'
import { Spacing, Card } from '@ds'

import { useLocale } from '@app/config/context/LocaleContextProvider'
import { useAppSelector } from '@app/state/hooks'
import AnimatedArrowDown from '@app/components/AnimatedArrowDown/AnimatedArrowDown'

interface StyledBackgroundProps {
    thememode?: 'dark' | 'light'
}

const themeModeBackground = {
    dark: darkBackground,
    light: lightBackground,
}

const StyledBackground = styled('div')<StyledBackgroundProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${({ thememode }) => themeModeBackground[thememode]});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`

const FirstSection: React.FC = () => {
    const { translate } = useLocale()
    const { themeMode } = useAppSelector((app) => app.settings)

    return (
        <StyledBackground thememode={themeMode}>
            <Card>
                <Spacing px="medium" py="small">
                    <Typography variant="h3">
                        {translate('welcome', {
                            name: 'Vítor',
                        })}
                    </Typography>
                </Spacing>
            </Card>
            <Spacing my="small">
                <Card>
                    <Spacing px="medium" py="small">
                        <Typography variant="body1" textAlign="center">
                            {translate('fullstack')}
                        </Typography>
                        <Typography variant="body1" textAlign="center">
                            {translate('frontend')}
                        </Typography>
                        <Typography variant="body1" textAlign="center">
                            {translate('backend')}
                        </Typography>
                    </Spacing>
                </Card>
            </Spacing>

            <AnimatedArrowDown />
        </StyledBackground>
    )
}

export default FirstSection
