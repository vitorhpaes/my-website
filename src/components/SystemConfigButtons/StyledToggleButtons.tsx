import { styled, ToggleButton, ToggleButtonGroup, SizeKey } from '@mui/material'

interface ButtonGroupProps {
    top?: SizeKey
}

export const StyledToggleButtonGroup = styled(
    ToggleButtonGroup
)<ButtonGroupProps>`
    position: absolute;
    top: ${({ theme, top }) => theme.size[top]}px;
`

export const StyledToggleButton = styled(ToggleButton)`
    padding: ${({ theme }) =>
        `${theme.size.nano}px ${theme.size.small}px ${theme.size.nano}px ${theme.size.small}px`};
`

export default {
    StyledToggleButtonGroup,
    StyledToggleButton,
}
