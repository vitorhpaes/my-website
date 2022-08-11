import React from 'react'
import { Card } from '@ds'
import { styled, Typography } from '@mui/material'

const StyledPaginationItem = styled(Card)`
    padding: ${({ theme }) => `${theme.size.nano}px ${theme.size.medium}px`};
    cursor: pointer;

    > * {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${({ theme }) => theme.size.small}px;
    }
`

interface CustomSwiperPaginationItemProps {
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
