import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material'

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
    z-index: 9999;
`

export const StyledToggleButton = styled(ToggleButton)`
    padding: ${({ theme }) =>
        `${theme.size.nano}px ${theme.size.small}px ${theme.size.nano}px ${theme.size.small}px`};
`

export default {
    StyledToggleButtonGroup,
    StyledToggleButton,
}
