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
    ...motionDivProps
}) => {
    const line = ['left', 'right'].includes(from) ? 'x' : 'y'
    const lineWidth = line === 'x' ? screen.width : screen.height
    const offScreen = lineWidth * -1
    const keepObjectIndex = 0

    return (
        <motion.div
            {...motionDivProps}
            initial={'hidden'}
            animate={'visible'}
            variants={{
                hidden: {
                    opacity: 0,
                    [line]: offScreen,
                },
                visible: {
                    opacity: 1,
                    [line]: keepObjectIndex,
                },
                exit: exit && {
                    opacity: 0,
                    [line]: offScreen,
                },
            }}
            // animate={{ [line]: keepObjectIndex, visibility: 1 }}
            // initial={{ [line]: initialStateInLine, visibility: 0 }}
            transition={{
                ease,
                duration,
            }}
        >
            {children}
        </motion.div>
    )
}

export default ShowFromSide
