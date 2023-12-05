import './App.css'
import { useEffect, useRef } from "react";

import './styles.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import SwiperArrowButtons from './components/SwiperArrowButtons';
import RegSwiper from './components/RegSwiper';
import img1 from '../src/assets/blog-1.png'
import img2 from '../src/assets/blog-2.png'
import img3 from '../src/assets/blog-3.png'
import Swiper1 from './components/Swiper1';
import Swiper2 from './components/Swiper2';
import SwipPractice from './components/SwipPractice';

function App() {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
      <Swiper1 />
      <Swiper2 />
      {/* <SwipPractice /> */}
    </div>
  )
}

export default App
