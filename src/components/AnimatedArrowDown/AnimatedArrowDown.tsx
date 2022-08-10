import React from 'react'

import { FiArrowDown } from 'react-icons/fi'
import { styled } from '@mui/material'
import { isMobile } from '@app/drivers/device'
import { Animated } from '../DesignSystem'

interface StyledArrowDownWapperProps {
    isMobile: boolean
}

const StyledArrowDownWapper = styled('div')<StyledArrowDownWapperProps>`
    position: absolute !important;
    bottom: ${({ theme, isMobile }) =>
        isMobile ? theme.size.huge : theme.size.huge}px!important;
`

const AnimatedArrowDown: React.FC = () => {
    const moveTop = -50

    return (
        <StyledArrowDownWapper isMobile={isMobile}>
            <Animated pulseRange={moveTop} line="y" duration={0.5}>
                <FiArrowDown size={40} />
            </Animated>
        </StyledArrowDownWapper>
    )
}

export default AnimatedArrowDown
