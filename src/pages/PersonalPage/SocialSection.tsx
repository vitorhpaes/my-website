import React from 'react'
import { Button, Container, styled, Typography } from '@mui/material'

import { SocialCard, Spacing } from '@ds'
import { SocialMediaProps } from './mock/socialContent'
import SectionBackground from '@components/SectionBackground/SectionBackground'
import { useAppSelector } from '@app/state/hooks'

import darkBackground from '@app/assets/images/social_dark.jpg'
import lightBackground from '@app/assets/images/social_light.jpg'
import { useLocale } from '@app/config/context/LocaleContextProvider'

const themeModeBackground = {
    dark: darkBackground,
    light: lightBackground,
}

interface SocialSectionProps {
    alreadyActived: boolean
    socialContent: SocialMediaProps[]
    revertAnimation: boolean
}

const SocialSectionFlexBox = styled(Spacing)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;

    > div {
        flex: 1;
    }
`

const StyledContainer = styled(Container)`
    margin-top: ${({ theme }) => theme.size.largeXX}px;
    min-height: calc(100% - ${({ theme }) => theme.size.hugeXXXX}px);
    max-height: calc(100% - ${({ theme }) => theme.size.largeXX}px);
`

const StyledCardChildrenWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: left;
`

const SocialSection: React.FC<SocialSectionProps> = ({
    alreadyActived,
    socialContent,
    revertAnimation,
}) => {
    const { themeMode } = useAppSelector((app) => app.settings)
    const { translate } = useLocale()

    return (
        <SectionBackground backgroundImage={themeModeBackground[themeMode]}>
            <StyledContainer>
                <SocialSectionFlexBox px="medium">
                    {alreadyActived &&
                        socialContent.map(({ network, username }, index) => (
                            <SocialCard
                                key={index}
                                animation={{
                                    reverse: revertAnimation,
                                    duration: (index + 1) * 0.15,
                                }}
                                network={network.name}
                            >
                                <StyledCardChildrenWrapper>
                                    <Spacing mt="nano" ml="nano">
                                        <Typography variant="body2">
                                            {username}
                                        </Typography>
                                    </Spacing>
                                    <Button size="small" variant="outlined">
                                        {translate(network.actionMessageKey)}
                                    </Button>
                                </StyledCardChildrenWrapper>
                            </SocialCard>
                        ))}
                </SocialSectionFlexBox>
            </StyledContainer>
        </SectionBackground>
    )
}

export default SocialSection
