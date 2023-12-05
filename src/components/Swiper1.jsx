import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import SwiperArrowButtons from './SwiperArrowButtons';
import { useEffect, useRef } from 'react';

import '../styles.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Swiper1 = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            pagination: true,
            // These are new...
            injectStyles: [
                `
            .swiper-button-next,
            .swiper-button-prev {
              background-color: white;
              padding: 8px 16px;
              border-radius: 100%;
              border: 2px solid black;
              color: red;
              position:relative;
              top:-300px;
              right:0;
            }
            .swiper-pagination-bullet{
              width: 40px;
              height: 40px;
              background-color: red;
            }
        `,
            ],
        };

        Object.assign(swiperContainer, params);
        // swiperContainer.initialize();
    }, []);
    return (
        <div className='container'>
            <Swiper
                ref={swiperRef}
                init="false"
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
                    slideShadows: true,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
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