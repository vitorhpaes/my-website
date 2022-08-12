import React from 'react'
import { Card } from '@ds'
import { styled, Typography } from '@mui/material'

interface StyledPaginationItemProps {
    isActive?: boolean
}

const StyledPaginationItem = styled(Card)<StyledPaginationItemProps>`
    padding: ${({ theme }) => `${theme.size.nano}px ${theme.size.medium}px`};
    box-shadow: ${({ theme, isActive }) =>
        isActive ? `box-shadow: ${theme.shadows[12]}` : ''};
    cursor: pointer;

    > * {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${({ theme }) => theme.size.small}px;
    }
`

interface CustomSwiperPaginationItemProps extends StyledPaginationItemProps {
    name?: string
    icon: React.ReactNode
    onClick: () => void
}

const CustomSwiperPaginationItem: React.FC<CustomSwiperPaginationItemProps> = ({
    name,
    icon: Icon,
    onClick,
    ...styledProps
}) => {
    return (
        <StyledPaginationItem {...styledProps} onClick={onClick}>
            <Typography variant="subtitle2">
                {Icon}
                {!!name && name}
            </Typography>
        </StyledPaginationItem>
    )
}

export default CustomSwiperPaginationItem
