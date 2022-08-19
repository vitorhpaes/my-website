import React, { useMemo } from 'react'
import SectionBackground from '@components/SectionBackground/SectionBackground'

import darkBackground from '@app/assets/images/social_dark.jpg'
import lightBackground from '@app/assets/images/social_light.jpg'

import { useAppSelector } from '@app/state/hooks'
import { Container, Grid, styled, Typography } from '@mui/material'
import { useLocale } from '@app/config/context/LocaleContextProvider'
import { Card, ProjectCard, Spacing } from '@ds'
import projectsContentMocked from './mock/projectsContent'

const themeModeBackground = {
    dark: darkBackground,
    light: lightBackground,
}

const StyledContainer = styled(Container)`
    text-align: center;
`

const ProjectsSection: React.FC = () => {
    const { settings } = useAppSelector((app) => app)
    const { language, themeMode } = settings

    const { translate } = useLocale()
    const projectsData = useMemo(
        () => projectsContentMocked[language],
        [language]
    )

    return (
        <SectionBackground backgroundImage={themeModeBackground[themeMode]}>
            <Card>
                <Spacing px="small" py="nano">
                    <Typography variant="h4">
                        {translate('projects')}
                    </Typography>
                </Spacing>
            </Card>
            <StyledContainer>
                <Spacing py="standard">
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                    >
                        {projectsData.map(({ title, description, image }) => (
                            <Grid item md={3} key={title}>
                                <ProjectCard
                                    title={title}
                                    description={description}
                                    image={image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Spacing>
            </StyledContainer>
        </SectionBackground>
    )
}

export default ProjectsSection
