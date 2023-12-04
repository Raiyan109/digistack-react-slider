import { useSwiper } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const SwiperArrowButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns">
            <button onClick={() => swiper.slidePrev()}>
                <FaArrowLeft />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <FaArrowRight />
            </button>
        </div>
    );
};

export default SwiperArrowButtons;