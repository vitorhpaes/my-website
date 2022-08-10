import React from 'react'

// import { Container } from './styles';
import { motion } from 'framer-motion'

export interface PulseInlineProps {
    line: 'x' | 'y'
    pulseRange: number
    transition?: number
    children: React.ReactNode
}

const PulseInline: React.FC<PulseInlineProps> = ({
    children,
    transition = 0.25,
    line,
    pulseRange,
}) => {
    return (
        <motion.div
            animate={{
                [line]: pulseRange,
            }}
            transition={{
                repeat: Infinity,
                duration: transition,
            }}
        >
            {children}
        </motion.div>
    )
}

export default PulseInline
