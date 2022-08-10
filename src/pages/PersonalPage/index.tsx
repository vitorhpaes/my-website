import React, { useState } from 'react'
import { styled } from '@mui/material'

import SwiperClass, { Controller, Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import FirstSection from '@pages/PersonalPage/FirstSection'

import CustomSwiperPagination from '@app/components/CustomSwiperPagination'

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
`

const PersonalPage: React.FC = () => {
    const [controller, setController] = useState<SwiperClass>(null)

    return (
        <>
            <CustomSwiperPagination controller={controller} />
            <StyledSwiper
                modules={[Mousewheel, Pagination, Controller]}
                initialSlide={0}
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                mousewheel
                pagination={{
                    clickable: true,
                }}
                controller={{ control: controller }}
                onSwiper={setController}
            >
                <SwiperSlide>
                    <FirstSection />
                </SwiperSlide>
                <SwiperSlide>Page</SwiperSlide>
            </StyledSwiper>
        </>
    )
}

export default PersonalPage
