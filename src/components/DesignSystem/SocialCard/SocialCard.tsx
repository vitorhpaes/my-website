import React from 'react'
import { Card, styled, useTheme } from '@mui/material'
import { Animated, Spacing } from '@ds'
import { SocialIcon } from 'react-social-icons'
import networks from './networks'
import { Styles } from 'polished/lib/types/style'
import { isMobile } from '@app/drivers/device'
import { rgba } from 'polished'

export type SocialMediaName =
    | 'default'
    | 'linkedin'
    | 'whatsapp'
    | 'instagram'
    | 'twitter'
    | 'google'
    | 'github'
    | 'spotify'

interface SocialCardProps {
    network: SocialMediaName
    showIcon?: boolean
    children: React.ReactNode
    animation?: {
        duration?: number
        reverse?: boolean
    }
}

interface StyledCardProps {
    backgroundGradient: Styles
    borderColor: string
}

const StyledCard = styled(Card)<StyledCardProps>`
    display: flex;
    width: 100%;
    align-items: center;
    border-radius: ${({ theme }) => theme.size.small}px;
    border: ${({ borderColor }) => `1px solid ${borderColor}`};
    ${({ backgroundGradient }) => backgroundGradient}
    padding: ${({ theme }) => `${theme.size.small}px ${theme.size.medium}px`};
`

const StyledWrapper = styled('div')`
    width: ${isMobile ? '100%' : 'fit-content'};
    margin-top: ${({ theme }) => theme.size.nano}px;
`

const SocialCard: React.FC<SocialCardProps> = ({
    network,
    showIcon = true,
    children,
    animation,
}) => {
    const theme = useTheme()
    const exit = animation.reverse ? 'reverse' : true
    const { createGradient, borderColor } = networks[network]
    const gradient = createGradient(rgba(theme.palette.background.paper, 0.6))
    return (
        <StyledWrapper>
            <Animated.ShowFromSide
                from="bottom"
                exit={exit}
                duration={animation.duration}
            >
                <StyledCard
                    backgroundGradient={gradient}
                    borderColor={borderColor}
                >
                    {showIcon && (
                        <Spacing mr="small">
                            <SocialIcon network={network} />
                        </Spacing>
                    )}
                    {children}
                </StyledCard>
            </Animated.ShowFromSide>
        </StyledWrapper>
    )
}

export default SocialCard
