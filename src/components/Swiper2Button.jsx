import { useSwiper } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import styles from '../swiper2.module.css'
import '../swiper2button.css'

const Swiper2Button = () => {
    const swiper = useSwiper();

    return (
        <div className='buttonContainer'>
            <button className='swiperNavBtns1' onClick={() => swiper.slidePrev()}>
                <FaArrowLeft />
            </button>
            <button className='swiperNavBtns2' onClick={() => swiper.slideNext()}>
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Swiper2Button;