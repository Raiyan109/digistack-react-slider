import './App.css'
import './styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import img1 from '../src/assets/blog-1.png'
import img2 from '../src/assets/blog-2.png'
import img3 from '../src/assets/blog-3.png'
import SwiperArrowButtons from './components/SwiperArrowButtons';
import RegSwiper from './components/RegSwiper';

function App() {


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
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperArrowButtons />
        <SwiperSlide>
          <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='swiper-img' src="https://swiperjs.com/demos/images/nature-3.jpg" />
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

      <RegSwiper />
    </div>
  )
}

export default App
