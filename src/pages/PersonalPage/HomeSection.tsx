import React from 'react'
import darkBackground from '@app/assets/images/background_dark.jpg'
import lightBackground from '@app/assets/images/background_light.jpg'

import { Avatar, Typography } from '@mui/material'
import { Spacing, Card } from '@ds'

import { useLocale } from '@app/config/context/LocaleContextProvider'
import { useAppSelector } from '@app/state/hooks'
import AnimatedArrowDown from '@components/AnimatedArrowDown/AnimatedArrowDown'
import SectionBackground from '@components/SectionBackground/SectionBackground'

const themeModeBackground = {
    dark: darkBackground,
    light: lightBackground,
}

const FirstSection: React.FC = () => {
    const { translate } = useLocale()
    const { themeMode } = useAppSelector((app) => app.settings)

    return (
        <SectionBackground backgroundImage={themeModeBackground[themeMode]}>
            <Spacing mb="small">
                <Avatar
                    alt="Profile Picture"
                    sx={{ width: 75, height: 75 }}
                    src="https://pps.whatsapp.net/v/t61.24694-24/296470152_813242303022205_4802499503124202478_n.jpg?ccb=11-4&oh=01_AVwPz-AJhu2tk-6lpbFAXwM_Wl76knLlPJQnS74vYUSm7g&oe=630625A5"
                />
            </Spacing>
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
        </SectionBackground>
    )
}

export default FirstSection
