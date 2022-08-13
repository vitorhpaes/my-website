import React, { useCallback } from 'react'
import { Avatar, Button, Container, styled, Typography } from '@mui/material'

import { SocialCard, Spacing } from '@ds'
import { SocialMediaProps } from './mock/socialContent'
import SectionBackground from '@components/SectionBackground/SectionBackground'
import { useAppSelector } from '@app/state/hooks'

import darkBackground from '@app/assets/images/social_dark.jpg'
import lightBackground from '@app/assets/images/social_light.jpg'
import { useLocale } from '@app/config/context/LocaleContextProvider'
import { isMobile } from '@app/drivers/device'

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
    margin-top: ${({ theme }) =>
        isMobile ? theme.size.large : theme.size.largeX}px;
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

    const handleClick = useCallback(
        (url: string) => window.open(url, '_blank'),
        []
    )

    return (
        <SectionBackground backgroundImage={themeModeBackground[themeMode]}>
            <StyledContainer>
                <SocialSectionFlexBox px="medium">
                    <Spacing mb="small">
                        <Avatar
                            alt="Profile Picture"
                            sx={{ width: 75, height: 75 }}
                            src="https://pps.whatsapp.net/v/t61.24694-24/296470152_813242303022205_4802499503124202478_n.jpg?ccb=11-4&oh=01_AVwPz-AJhu2tk-6lpbFAXwM_Wl76knLlPJQnS74vYUSm7g&oe=630625A5"
                        />
                    </Spacing>
                    {alreadyActived &&
                        socialContent.map(
                            ({ network, username, link }, index) => (
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
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            onClick={() => handleClick(link)}
                                        >
                                            {translate(
                                                network.actionMessageKey
                                            )}
                                        </Button>
                                    </StyledCardChildrenWrapper>
                                </SocialCard>
                            )
                        )}
                </SocialSectionFlexBox>
            </StyledContainer>
        </SectionBackground>
    )
}

export default SocialSection
