import React, { useCallback, useMemo } from 'react'
import { styled } from '@mui/material'
import SwiperClass from 'swiper'
import pageConfig from './data'
import { isMobile } from '@app/drivers/device'
import { useAppDispatch, useAppSelector } from '@app/state/hooks'

import { TiThMenuOutline } from 'react-icons/ti'
import { setShowMenuButton } from '@app/state/slices/settings'
import CustomSwiperPaginationItem from './CustomSwiperPaginationItem'

import { Animated } from '@ds'

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

const CustomSwiperPagination: React.FC<CustomSwiperPaginationProps> = ({
    controller,
}) => {
    const isDeviceMobile = isMobile()
    const { showMenuButton } = useAppSelector((app) => app.settings)
    const dispatch = useAppDispatch()

    const isMenuOpen = useMemo(() => !showMenuButton, [showMenuButton])

    const toggleMenu = useCallback(() => {
        dispatch(setShowMenuButton(!showMenuButton))
    }, [showMenuButton])

    const slideToIndex = useCallback(
        (index: number) => {
            toggleMenu()
            controller.slideTo(index)
        },
        [controller, toggleMenu]
    )

    return (
        <StyledPaginationWrapper isMobile={isDeviceMobile}>
            {isDeviceMobile && (
                <CustomSwiperPaginationItem
                    icon={TiThMenuOutline}
                    isVisible={isDeviceMobile || showMenuButton}
                    animated={false}
                    onClick={toggleMenu}
                />
            )}
            {pageConfig.map((config, index) => (
                <Animated
                    type="showFromSide"
                    from="top"
                    duration={(index + 1) * 0.25}
                    key={index}
                >
                    <CustomSwiperPaginationItem
                        name={config.name}
                        icon={config.Icon}
                        isVisible={isMenuOpen}
                        onClick={() => slideToIndex(index)}
                        animated
                    />
                </Animated>
            ))}
        </StyledPaginationWrapper>
    )
}

export default CustomSwiperPagination
