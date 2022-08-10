import React from 'react'
import { Card } from '@ds'
import { styled, Typography } from '@mui/material'
import { IconType } from 'react-icons'

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
    icon: IconType
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
                {<Icon size={20} />}
                {!!name && name}
            </Typography>
        </StyledPaginationItem>
    )
}

export default CustomSwiperPaginationItem
