import React from 'react'
import { styled, Typography } from '@mui/material'
import SwiperClass from 'swiper'
import pageConfig from './config'
import { isMobile } from '@app/drivers/device'
import { Card } from '@ds'

interface CustomSwiperPaginationProps {
    controller: SwiperClass
}

interface StyledPaginaationWrapperProps {
    isMobile: boolean
}

const StyledPaginationWrapper = styled('div')<StyledPaginaationWrapperProps>`
    position: fixed;
    z-index: 9999;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: ${({ theme }) => theme.size.huge}px;
    gap: ${({ theme }) => theme.size.medium}px;
    ${({ isMobile }) => isMobile && `flex-direction: column;`}
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
    const isDeviceMobile = isMobile()
    return (
        <StyledPaginationWrapper isMobile={isDeviceMobile}>
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
