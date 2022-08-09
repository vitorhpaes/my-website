import React from 'react'
import darkBackground from '@app/assets/images/background_dark.jpg'
import lightBackground from '@app/assets/images/old/bg07.jpg'

import { Divider, styled, Typography } from '@mui/material'
import { Spacing, Card } from '@ds'
import ChangeThemeButton from '@app/components/SystemConfigButtons/ChangeThemeButton'
import ChangeLanguageButton from '@app/components/SystemConfigButtons/ChangeLanguageButton'

import {
    SiRedux,
    SiReact,
    SiTypescript,
    SiWebpack,
    SiBabel,
    SiEslint,
    SiPrettier,
    SiJest,
    SiGithub,
    SiMaterialui,
    SiStyledcomponents,
    SiStorybook,
} from 'react-icons/si'

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

const StyledTechCard = styled(Card)`
    position: fixed;
    bottom: 0;
    right: ${({ theme }) => theme.size.largeX}px;

    > * {
        display: flex;
        align-items: space-between;
        justify-content: center;
    }
`

const HomePage: React.FC = () => {
    const { translate } = useLocale()
    const { themeMode } = useAppSelector((app) => app.settings)

    return (
        <StyledBackground themeMode={themeMode}>
            <ChangeThemeButton />
            <ChangeLanguageButton />
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
            <StyledTechCard>
                <Spacing px="medium" py="small">
                    <Typography variant="body2">
                        This website was made with
                    </Typography>
                    <Spacing ml="small">
                        <SiReact size={20} />
                    </Spacing>
                    <Spacing ml="small">
                        <SiTypescript size={20} />
                    </Spacing>
                    <Spacing ml="small">
                        <SiRedux size={20} />
                    </Spacing>
                    <Spacing ml="small">
                        <SiMaterialui size={20} />
                    </Spacing>
                    <Spacing ml="small">
                        <SiStyledcomponents size={25} />
                    </Spacing>
                    <Spacing mx="small">
                        <SiStorybook size={20} />
                    </Spacing>
                    <Divider style={{ borderLeftWidth: 'thin' }} />
                    <Spacing ml="small">
                        <SiWebpack size={20} />
                    </Spacing>
                    <Spacing mx="small">
                        <SiBabel size={20} />
                    </Spacing>
                    <Divider style={{ borderLeftWidth: 'thin' }} />
                    <Spacing ml="small">
                        <SiJest size={20} />
                    </Spacing>
                    <Spacing ml="small">
                        <SiEslint size={20} />
                    </Spacing>
                    <Spacing mx="small">
                        <SiPrettier size={20} />
                    </Spacing>
                    <Divider style={{ borderLeftWidth: 'thin' }} />
                    <Spacing ml="small">
                        <SiGithub size={20} />
                    </Spacing>
                </Spacing>
            </StyledTechCard>
        </StyledBackground>
    )
}

export default HomePage
