import React, { useCallback, useState } from 'react'
import { styled } from '@mui/material'
import SwiperClass from 'swiper'
import pageConfig from './data'
import { isMobile } from '@app/drivers/device'

import { MdMenu, MdMenuOpen } from 'react-icons/md'
import CustomSwiperPaginationItem from './CustomSwiperPaginationItem'
import { AnimatePresence } from 'framer-motion'
import { Animated } from '@ds'
import { useLocale } from '@app/config/context/LocaleContextProvider'

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
    top: ${({ theme }) => theme.size.huge}px;
    gap: ${({ theme }) => theme.size.medium}px;
    ${isMobile && `flex-direction: column;`}
`

const CustomSwiperPagination: React.FC<CustomSwiperPaginationProps> = ({
    controller,
}) => {
    const showToggler = isMobile
    const { translate } = useLocale()
    const [isOpen, setIsOpen] = useState(!isMobile)

    const slideToIndex = useCallback(
        (index: number) => {
            if (isMobile) setIsOpen(false)
            controller.slideTo(index)
        },
        [controller, isOpen]
    )

    return (
        <StyledPaginationWrapper>
            {showToggler && (
                <CustomSwiperPaginationItem
                    icon={
                        isOpen ? <MdMenuOpen size={20} /> : <MdMenu size={20} />
                    }
                    onClick={() => setIsOpen(!isOpen)}
                />
            )}
            <AnimatePresence>
                {isOpen &&
                    pageConfig.map((config, index) => (
                        <Animated.ShowFromSide
                            key={index}
                            duration={(index + 1) * 0.25}
                            from="top"
                        >
                            <CustomSwiperPaginationItem
                                isActive={controller?.activeIndex === index}
                                name={translate(config.translationKey)}
                                icon={config.Icon}
                                onClick={() => slideToIndex(index)}
                            />
                        </Animated.ShowFromSide>
                    ))}
            </AnimatePresence>
        </StyledPaginationWrapper>
    )
}

export default CustomSwiperPagination
