import { styled } from '@mui/material'

interface StyledBackgroundProps {
    backgroundImage: string
}

const StyledBackground = styled('div')<StyledBackgroundProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`

export default StyledBackground
