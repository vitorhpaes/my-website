import { styled } from '@mui/material'
import { rgba } from 'polished'

const StyledCard = styled('div')`
    font-family: 'Comfortaa';
    user-select: none;
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) =>
        rgba(theme.palette.background.paper, 0.5)};
    border-radius: ${({ theme }) => theme.size.small}px;
    box-shadow: ${({ theme }) => theme.shadows[11]};

    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    border: 1px solid
        ${({ theme }) => rgba(theme.palette.background.paper, 0.2)};
`

export default StyledCard
