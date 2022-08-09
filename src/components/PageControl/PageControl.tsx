import React from 'react'
import HomePage from '@app/pages/HomePage'
import { Mousewheel, Pagination } from 'swiper'
import { styled } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
`

const PageControl: React.FC = () => {
    return (
        <StyledSwiper
            direction="vertical"
            slidesPerView={1}
            spaceBetween={0}
            mousewheel
            pagination={{
                clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
        >
            <SwiperSlide>
                <HomePage />
            </SwiperSlide>

            <SwiperSlide>Page</SwiperSlide>
        </StyledSwiper>
    )
}

export default PageControl
