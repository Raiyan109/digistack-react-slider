import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from "swiper/modules";
import SwiperArrowButtons from './SwiperArrowButtons';
import { useSwiperSlide } from 'swiper/react';

import '../styles.css'
// import '../components/swipPractice.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const SwipPractice = () => {
    const swiperSlide = useSwiperSlide();
    console.log(swiperSlide);
    return (
        <div className='container'>
            <Swiper
                // ref={swiperRef}
                // init="false"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                spaceBetween={30}
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
                    {/* <span slot='wrapper-end'></span>
                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    <p className='swiper-p'>Residential interior design</p> */}

                    {({ isActive }) => (
                        <div>
                            {isActive ?
                                <div>
                                    <img className='swiper-img ' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    <p className='swiper-p'>Residential interior design</p>
                                </div>
                                :
                                <div className=''>
                                    <img className=' in-active' src="https://swiperjs.com/demos/images/nature-1.jpg" />

                                </div>
                            }
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div>
                            {isActive ?
                                <div>
                                    <img className='swiper-img ' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    <p className='swiper-p'>Residential interior design</p>
                                </div>
                                :
                                <div className=''>
                                    <img className=' in-active' src="https://swiperjs.com/demos/images/nature-1.jpg" />

                                </div>
                            }
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div>
                            {isActive ?
                                <div>
                                    <img className='swiper-img ' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    <p className='swiper-p'>Residential interior design</p>
                                </div>
                                :
                                <div className=''>
                                    <img className=' in-active' src="https://swiperjs.com/demos/images/nature-1.jpg" />

                                </div>
                            }
                        </div>
                    )}
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

export default SwipPractice;