import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Swiper2Button from './Swiper2Button';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper2.css'

import img1 from '../assets/blog-1.png'

const Swiper2 = () => {
    // const swiperRef = useRef(null);

    // useEffect(() => {
    //     const swiperContainer = swiperRef.current;
    //     const params = {
    //         navigation: true,
    //         pagination: true,
    //         // These are new...
    //         injectStyles: [
    //             `
    //         .swiper-button-next,
    //         .swiper-button-prev {
    //           background-color: white;
    //           padding: 8px 16px;
    //           border-radius: 100%;
    //           border: 2px solid black;
    //           color: red;
    //           position:relative;
    //           top:-300px;
    //           right:0;
    //         }
    //         .swiper-pagination-bullet{
    //           width: 40px;
    //           height: 40px;
    //           background-color: red;
    //         }
    //     `,
    //         ],
    //     };

    //     Object.assign(swiperContainer, params);
    //     // swiperContainer.initialize();
    // }, []);
    return (
        <div className='container'>
            <Swiper
                // ref={swiperRef}
                // init="false"
                effect={'coverflow'}
                grabCursor={true}
                // centeredSlides={true}
                // watchSlidesProgress={true}
                slidesPerView={2}
                // loop={true}


                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    scale: 1,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                }}
                // pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className=""
            >
                <div className='swiper2-content-wrapper'>
                    <div className='swiper2-header-wrapper'>
                        <h1 style={{ fontSize: '40px', textTransform: 'uppercase', color: 'black', fontWeight: 'normal', lineHeight: '1px' }}>Our <span style={{ fontSize: '40px', textTransform: 'uppercase', color: 'black', fontWeight: 'bolder' }}>Works of Art:</span></h1>
                        <h1 style={{ fontSize: '40px', textTransform: 'uppercase', color: 'black' }}>Unfolding Design stories</h1>
                        <p className='swiper2-paragraph'>Solli lobortis risus eget iaculis tincidunt placerat neque nisi. Aliquam at nibh mauris facilisis in sed aliquet. Feugiat massa mollis commodo sed sagittis vestibulum libero diam id.</p>
                    </div>
                </div>
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
                <SwiperSlide
                >
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
                <div>
                    <Swiper2Button />
                </div>
                <SwiperSlide>
                    {({ isActive }) => (
                        <div>
                            {isActive ?
                                <div>
                                    <img className='swiper-img ' src={img1} />
                                    <p className='swiper-p'>Residential interior design</p>
                                </div>
                                :
                                <div className=''>
                                    <img className=' in-active' src={img1} />

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
                                    <img className='swiper-img ' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                    <p className='swiper-p'>Residential interior design</p>
                                </div>
                                :
                                <div className=''>
                                    <img className=' in-active' src="https://swiperjs.com/demos/images/nature-3.jpg" />

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
                                    <img className='swiper-img ' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                    <p className='swiper-p'>Residential interior design</p>
                                </div>
                                :
                                <div className=''>
                                    <img className=' in-active' src="https://swiperjs.com/demos/images/nature-4.jpg" />

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

            </Swiper>
        </div>
    );
};

export default Swiper2;