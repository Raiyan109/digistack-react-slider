import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from "swiper/modules";
import SwiperArrowButtons from './SwiperArrowButtons';
import { useEffect, useRef } from 'react';

import '../styles.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Swiper1 = () => {

    return (
        <div className='container'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                // loop={true}

                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    scale: 1,
                    depth: 100,
                    modifier: 2,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                <div className='swiper-content-wrapper'>
                    <div className='swiper-header-wrapper'>
                        <h1 style={{ fontSize: '40px', textTransform: 'uppercase', color: 'black', fontWeight: 'normal' }}>Comprehensive interior </h1>
                        <h1 style={{ fontSize: '40px', textTransform: 'uppercase', color: 'black', fontWeight: 'bolder' }}>design services</h1>
                    </div>
                    <div>
                        <SwiperArrowButtons />
                    </div>
                </div>
                <SwiperSlide>
                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    <p className='swiper-p'>Residential interior design</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    <p className='swiper-p'>Space planning and layout</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    <p className='swiper-p'>Royal bedroom</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Swiper1;