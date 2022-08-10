import React from 'react'
import PulseInline, { PulseInlineProps } from './PulseInline'
import ShowFromSide, { ShowFromSideProps } from './ShowFromSide'

// type AnimationTypes = 'showFromSide' | 'pulseInline'

interface Children {
    children: React.ReactNode
}

type AnimatedComponentPropsWithAnimationConfig =
    | (Children & Pick<ShowFromSideProps, keyof ShowFromSideProps>)
    | (Children & Pick<PulseInlineProps, keyof PulseInlineProps>)

const Animated: React.FC<AnimatedComponentPropsWithAnimationConfig> = (
    config
) => {
    if ('from' in config) return <ShowFromSide {...config} />
    if ('pulseRange' in config) return <PulseInline {...config} />
}

export default Animated
