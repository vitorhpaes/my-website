import React, { useState } from 'react'
import { styled } from '@mui/material'

import SwiperClass, { Controller, Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import HomeSection from '@app/pages/PersonalPage/HomeSection'
import CustomSwiperPagination from '@app/components/CustomSwiperPagination'
import SocialSection from './SocialSection'
import socialContentMocked from './mock/socialContent'

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
`

const PersonalPage: React.FC = () => {
    const [controller, setController] = useState<SwiperClass>(null)
    const [activeSlide, setActiveSlide] = useState<number>(0)
    const [alreadyActivedSlides, setAlreadyActivedSlides] = useState<number[]>(
        []
    )

    const afterChangeSlide = (swiper: SwiperClass) => {
        const currentSlideIndex = swiper.activeIndex
        setActiveSlide(swiper.activeIndex)
        if (!alreadyActivedSlides.includes(currentSlideIndex)) {
            setAlreadyActivedSlides([
                ...alreadyActivedSlides,
                currentSlideIndex,
            ])
        }
    }

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
                onSlideChange={afterChangeSlide}
                onSwiper={setController}
            >
                <SwiperSlide>
                    <HomeSection />
                </SwiperSlide>
                <SwiperSlide>
                    <SocialSection
                        alreadyActived={alreadyActivedSlides.includes(1)}
                        revertAnimation={activeSlide < 1}
                        socialContent={socialContentMocked}
                    />
                </SwiperSlide>
                <SwiperSlide>OTHER SECTION</SwiperSlide>
            </StyledSwiper>
        </>
    )
}

export default PersonalPage
