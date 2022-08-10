import React, { useCallback, useState } from 'react'
import { styled } from '@mui/material'
import SwiperClass from 'swiper'
import pageConfig from './data'
import { isMobile } from '@app/drivers/device'

import { TiThMenuOutline } from 'react-icons/ti'
import CustomSwiperPaginationItem from './CustomSwiperPaginationItem'
import { motion, AnimatePresence } from 'framer-motion'

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
    const showToggler = isMobile
    const [isOpen, setIsOpen] = useState(false)

    const slideToIndex = useCallback(
        (index: number) => {
            setIsOpen(false)
            controller.slideTo(index)
        },
        [controller, isOpen]
    )

    return (
        <StyledPaginationWrapper isMobile={isMobile}>
            {showToggler && (
                <CustomSwiperPaginationItem
                    icon={TiThMenuOutline}
                    onClick={() => setIsOpen(!isOpen)}
                />
            )}
            <AnimatePresence>
                {isOpen &&
                    pageConfig.map((config, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: screen.height * -1.2, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: screen.height * -1.2, opacity: 0 }}
                            transition={{
                                duration: (index + 1) * 0.25,
                                ease: 'easeOut',
                            }}
                        >
                            <CustomSwiperPaginationItem
                                name={config.name}
                                icon={config.Icon}
                                onClick={() => slideToIndex(index)}
                            />
                        </motion.div>
                    ))}
            </AnimatePresence>
        </StyledPaginationWrapper>
    )
}

export default CustomSwiperPagination
