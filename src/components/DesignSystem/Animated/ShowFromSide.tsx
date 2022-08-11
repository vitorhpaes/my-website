import React from 'react'
import { motion } from 'framer-motion'
export interface ShowFromSideProps {
    from?: 'left' | 'rigth' | 'top' | 'bottom'
    ease?: string
    duration?: number
    exit?: boolean | 'reverse'

    children: React.ReactNode
}

const ShowFromSide: React.FC<ShowFromSideProps> = ({
    from = 'left',
    duration = 0.25,
    ease = 'easeOut',
    exit = true,

    children,
}) => {
    const line = ['left', 'right'].includes(from) ? 'x' : 'y'
    const lineWidth = line === 'x' ? screen.width : screen.height
    const multiplicatorBasedOnLine = ['bottom', 'left'].includes(from) ? 1 : -1
    const offScreen = lineWidth * multiplicatorBasedOnLine
    const keepObjectIndex = 0

    const exitTargetIndex = exit === 'reverse' ? offScreen * -1 : offScreen

    return (
        <motion.div
            initial={{ [line]: offScreen, opacity: 0 }}
            animate={{ [line]: keepObjectIndex, opacity: 1 }}
            exit={exit && { [line]: exitTargetIndex, opacity: 0 }}
            transition={{
                duration: duration,
                ease: ease,
            }}
        >
            {children}
        </motion.div>
    )
}
export default ShowFromSide
