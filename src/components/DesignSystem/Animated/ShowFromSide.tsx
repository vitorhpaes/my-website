import React from 'react'
import { motion } from 'framer-motion'
export interface ShowFromSideProps {
    from?: 'left' | 'rigth' | 'top' | 'bottom'
    ease?: string
    duration?: number
    exit?: boolean

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
    const offScreen = lineWidth * -1
    const keepObjectIndex = 0

    return (
        <motion.div
            initial={{ [line]: offScreen, opacity: 0 }}
            animate={{ [line]: keepObjectIndex, opacity: 1 }}
            exit={exit && { [line]: offScreen, opacity: 0 }}
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
