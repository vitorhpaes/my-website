import React from 'react'

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { styled } from '@mui/material'
import { isMobile } from '@app/drivers/device'

interface StyledArrowDownWapperProps {
    isMobile: boolean
}

const StyledArrowDownWapper = styled(motion.div)<StyledArrowDownWapperProps>`
    position: absolute;
    bottom: ${({ theme, isMobile }) =>
        isMobile ? theme.size.huge : theme.size.huge}px;
`

const AnimatedArrowDown: React.FC = () => {
    const isDeviceMobile = isMobile

    const moveTop = -50

    return (
        <StyledArrowDownWapper
            isMobile={isDeviceMobile}
            animate={{
                y: moveTop,
            }}
            transition={{
                repeat: Infinity,
                duration: 0.25,
            }}
        >
            <FiArrowDown size={35} />
        </StyledArrowDownWapper>
    )
}

export default AnimatedArrowDown
