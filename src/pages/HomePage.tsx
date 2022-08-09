import React from 'react'
import darkBackground from '@app/assets/images/background_dark.jpg'
import lightBackground from '@app/assets/images/old/bg07.jpg'

import { styled, Typography } from '@mui/material'
import { Spacing, Card } from '@ds'

import { useLocale } from '@app/config/context/LocaleContextProvider'
import { useAppSelector } from '@app/state/hooks'

interface StyledBackgroundProps {
    themeMode?: 'dark' | 'light'
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
    background-image: url(${({ themeMode }) => themeModeBackground[themeMode]});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`

const HomePage: React.FC = () => {
    const { translate } = useLocale()
    const { themeMode } = useAppSelector((app) => app.settings)

    return (
        <StyledBackground themeMode={themeMode}>
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
        </StyledBackground>
    )
}

export default HomePage
