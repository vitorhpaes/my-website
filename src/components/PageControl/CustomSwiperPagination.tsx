import { styled, Typography } from '@mui/material'
import React from 'react'
import SwiperClass from 'swiper'
import { Card } from '@ds'
import pageConfig from './config'

interface CustomSwiperPaginationProps {
    controller: SwiperClass
}

const StyledPaginationWrapper = styled('div')`
    position: fixed;
    z-index: 9999;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: ${({ theme }) => theme.size.hugeX}px;
    gap: ${({ theme }) => theme.size.medium}px;
`

const StyledPaginationItem = styled(Card)`
    padding: ${({ theme }) => `${theme.size.nano}px ${theme.size.medium}px`};

    > * {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${({ theme }) => theme.size.small}px;
    }
`

const CustomSwiperPagination: React.FC<CustomSwiperPaginationProps> = ({
    controller,
}) => {
    return (
        <StyledPaginationWrapper>
            {pageConfig.map((config, index) => (
                <StyledPaginationItem
                    onClick={() => controller.slideTo(index)}
                    key={index}
                >
                    <Typography variant="subtitle2">
                        {<config.Icon />}
                        {config.name}
                    </Typography>
                </StyledPaginationItem>
            ))}
        </StyledPaginationWrapper>
    )
}

export default CustomSwiperPagination
