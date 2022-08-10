import React from 'react'
import ShowFromSide, { ShowFromSideProps } from './ShowFromSide'

// import { Container } from './styles

type AnimationTypes = 'showFromSide' /* | 'otherAnimation' */
type AnimationComponentProps = ShowFromSideProps

interface AnimatedComponentProps extends AnimationComponentProps {
    type: AnimationTypes
}

const Animated: React.FC<AnimatedComponentProps> = ({ type, ...props }) => {
    if (type === 'showFromSide') return <ShowFromSide {...props} />
}

export default Animated
