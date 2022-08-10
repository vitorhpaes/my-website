import React from 'react'
import { motion } from 'framer-motion'

export interface ShowFromSideProps {
    from?: 'left' | 'rigth' | 'top' | 'bottom'
    ease?: string
    duration?: number

    children: React.ReactNode
}

const ShowFromSide: React.FC<ShowFromSideProps> = ({
    from = 'left',
    duration = 0.25,
    ease = 'easeOut',

    children,
}) => {
    const line = ['left', 'right'].includes(from) ? 'x' : 'y'
    const lineWidth = line === 'x' ? screen.width : screen.height
    const initialStateInLine = lineWidth * -1

    return (
        <motion.div
            animate={{ [line]: 0 }}
            initial={{ [line]: initialStateInLine }}
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
