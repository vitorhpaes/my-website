import React from 'react'

import { FiArrowDown } from 'react-icons/fi'
import { styled } from '@mui/material'
import { isMobile } from '@app/drivers/device'
import { Animated } from '../DesignSystem'

const StyledArrowDownWapper = styled('div')`
    position: absolute !important;
    bottom: ${({ theme }) =>
        isMobile ? theme.size.huge : theme.size.huge}px!important;
`

const AnimatedArrowDown: React.FC = () => {
    const moveTop = -50

    return (
        <StyledArrowDownWapper>
            <Animated pulseRange={moveTop} line="y" duration={0.5}>
                <FiArrowDown size={40} />
            </Animated>
        </StyledArrowDownWapper>
    )
}

export default AnimatedArrowDown
