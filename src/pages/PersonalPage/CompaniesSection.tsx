import React from 'react'
import SectionBackground from '@components/SectionBackground/SectionBackground'

import darkBackground from '@app/assets/images/social_dark.jpg'
import lightBackground from '@app/assets/images/social_light.jpg'

import { useAppSelector } from '@app/state/hooks'
import { Container, Grid, styled, Typography } from '@mui/material'
import { useLocale } from '@app/config/context/LocaleContextProvider'
import { Card, Spacing } from '@ds'
import companiesContentMocked from './mock/companiesContent'

const themeModeBackground = {
    dark: darkBackground,
    light: lightBackground,
}

const StyledContainer = styled(Container)`
    text-align: center;
`

const CompaniesSection: React.FC = () => {
    const { themeMode } = useAppSelector((app) => app.settings)

    const { translate } = useLocale()

    return (
        <SectionBackground backgroundImage={themeModeBackground[themeMode]}>
            <Card>
                <Spacing px="large" py="nano">
                    <Typography variant="h4">
                        {translate('companies')}
                    </Typography>
                </Spacing>
            </Card>
            <StyledContainer>
                <Spacing py="standard">
                    <Grid
                        container
                        alignItems="space-between"
                        justifyContent="center"
                        spacing={2}
                    >
                        {companiesContentMocked.map(({ title, image }) => (
                            <Card key={title}>
                                <Spacing py={'small'} px="small">
                                    <Grid item md={3}>
                                        <img src={image} alt={title} />
                                    </Grid>
                                </Spacing>
                            </Card>
                        ))}
                    </Grid>
                </Spacing>
            </StyledContainer>
        </SectionBackground>
    )
}

export default CompaniesSection
