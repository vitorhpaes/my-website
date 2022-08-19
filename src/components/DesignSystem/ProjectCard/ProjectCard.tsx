import React from 'react'
import { Card, Grid, styled, Typography } from '@mui/material'
import { Animated } from '@ds'
import { isMobile } from '@app/drivers/device'
import { rgba } from 'polished'

export interface ProjectProps {
    title: string
    description: string
    image: string
}

interface SocialCardProps extends ProjectProps {
    animation?: {
        duration?: number
        reverse?: boolean
    }
}

const StyledCard = styled(Card)`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.size.small}px;
    padding: ${({ theme }) => `${theme.size.small}px ${theme.size.medium}px`};
    background: ${({ theme }) => rgba(theme.palette.background.paper, 0.5)};
`

const StyledProjectData = styled('div')`
    align-items: 'center';
    justify-content: 'center';
    display: flex;
    flex-direction: column;
`

const ProjectCard: React.FC<SocialCardProps> = ({
    title,
    description,
    image,
    animation,
    ...styled
}) => {
    const exit = animation?.reverse ? 'reverse' : true
    return (
        <Animated.ShowFromSide
            from="bottom"
            exit={exit}
            duration={animation?.duration}
        >
            <StyledCard {...styled}>
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                    flexDirection={isMobile ? 'column' : 'row'}
                >
                    <Grid
                        item
                        md={4}
                        container
                        alignItems="center"
                        justifyContent="center"
                    >
                        <img src={image} alt={title} height="50" width="auto" />
                    </Grid>
                    <Grid item md={8}>
                        <StyledProjectData>
                            <Typography variant="h6">{title}</Typography>
                            <Typography variant="body2">
                                {description}
                            </Typography>
                        </StyledProjectData>
                    </Grid>
                </Grid>
            </StyledCard>
        </Animated.ShowFromSide>
    )
}

export default ProjectCard
