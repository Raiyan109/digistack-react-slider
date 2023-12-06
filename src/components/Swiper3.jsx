import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import '../swiper3.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { TbTopologyStar } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

const Swiper3 = () => {
    return (
        <div className='container3'>
            <Swiper
                // effect={'coverflow'}
                grabCursor={true}
                slidesPerView={'auto'}
                spaceBetween={30}

                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    scale: 1,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='mySwiper'
            >
                {/* Swiper 3 Header */}
                <div className='swiper3-content-wrapper'>
                    <div className='swiper3-header-wrapper'>
                        <h1 style={{ fontSize: '40px', textTransform: 'uppercase', color: 'black', fontWeight: 'normal', lineHeight: '1px' }}>Quality full medical</h1>
                        <h1 style={{ fontSize: '40px', textTransform: 'uppercase', fontWeight: 'normal', color: 'black' }}>services for patients</h1>
                    </div>
                </div>

                {/* Slides start here */}
                <SwiperSlide>
                    {/* <div className='swiper3-slide-container-active'>
                        <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <div className='swiper3-slide-content-wrapper'>
                            <div className='swiper3-slider-top-content'>
                                <TbTopologyStar />
                            </div>
                            <div className='swiper3-slider-middle-content'>
                                <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                            </div>
                            <div className='swiper3-slider-bottom-content'>
                                <h4>More about checkup</h4>
                                <button><FaArrowRight /></button>
                            </div>
                        </div>
                    </div> */}
                    {({ isActive }) => (
                        <div>
                            {isActive ?
                                <div className='swiper3-slide-container-active'>
                                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    <div className='swiper3-slide-content-wrapper'>
                                        <div className='swiper3-slider-top-content'>
                                            <TbTopologyStar />
                                        </div>
                                        <div className='swiper3-slider-middle-content'>
                                            <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                            <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                                        </div>
                                        <div className='swiper3-slider-bottom-content'>
                                            <h4>More about checkup</h4>
                                            <button><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='swiper3-slide-container-active'>
                                    {/* <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
                                    <div className='swiper3-slide-content-wrapper'>
                                        <div className='swiper3-slider-top-content'>
                                            <TbTopologyStar />
                                        </div>
                                        <div className='swiper3-slider-middle-content'>
                                            <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                            <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                                        </div>
                                        <div className='swiper3-slider-bottom-content'>
                                            <button><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide
                >
                    {({ isActive }) => (
                        <div>
                            {isActive ?
                                <div className='swiper3-slide-container-active'>
                                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    <div className='swiper3-slide-content-wrapper'>
                                        <div className='swiper3-slider-top-content'>
                                            <TbTopologyStar />
                                        </div>
                                        <div className='swiper3-slider-middle-content'>
                                            <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                            <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                                        </div>
                                        <div className='swiper3-slider-bottom-content'>
                                            <h4>More about checkup</h4>
                                            <button><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='swiper3-slide-container-inactive swiper-slide2' >
                                    {/* <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
                                    <div className='swiper3-slide-content-wrapper'>
                                        <div className='swiper3-slider-top-content'>
                                            <TbTopologyStar />
                                        </div>
                                        <div className='swiper3-slider-middle-content'>
                                            <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                            <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                                        </div>
                                        <div className='swiper3-slider-bottom-content-inactive'>
                                            <button><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )}

                </SwiperSlide>
                <SwiperSlide
                >
                    {({ isActive }) => (
                        <div>
                            {isActive ?
                                <div className='swiper3-slide-container-active'>
                                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    <div className='swiper3-slide-content-wrapper'>
                                        <div className='swiper3-slider-top-content'>
                                            <TbTopologyStar />
                                        </div>
                                        <div className='swiper3-slider-middle-content'>
                                            <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                            <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                                        </div>
                                        <div className='swiper3-slider-bottom-content'>
                                            <h4>More about checkup</h4>
                                            <button><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='swiper3-slide-container-active' >
                                    {/* <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
                                    <div className='swiper3-slide-content-wrapper'>
                                        <div className='swiper3-slider-top-content'>
                                            <TbTopologyStar />
                                        </div>
                                        <div className='swiper3-slider-middle-content'>
                                            <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                            <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                                        </div>
                                        <div className='swiper3-slider-bottom-content'>
                                            <h4>More about checkup</h4>
                                            <button><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )}

                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div>
                            {isActive ?
                                <div className='swiper3-slide-container-active'>
                                    <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    <div className='swiper3-slide-content-wrapper'>
                                        <div className='swiper3-slider-top-content'>
                                            <TbTopologyStar />
                                        </div>
                                        <div className='swiper3-slider-middle-content'>
                                            <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                            <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                                        </div>
                                        <div className='swiper3-slider-bottom-content'>
                                            <h4>More about checkup</h4>
                                            <button><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='swiper3-slide-container-active'>
                                    {/* <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
                                    <div className='swiper3-slide-content-wrapper'>
                                        <div className='swiper3-slider-top-content'>
                                            <TbTopologyStar />
                                        </div>
                                        <div className='swiper3-slider-middle-content'>
                                            <h1 style={{ fontSize: '20px' }}>Cardiology</h1>
                                            <p style={{ color: '#696969', fontSize: '12px' }}>Pharmacies are committed to making health care accessible and affordable for all. They importance of health checkups.</p>
                                        </div>
                                        <div className='swiper3-slider-bottom-content'>
                                            <h4>More about checkup</h4>
                                            <button><FaArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Swiper3;