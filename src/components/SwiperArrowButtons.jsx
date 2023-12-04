import { useSwiper } from 'swiper/react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const SwiperArrowButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="">
            <button className="swiper-nav-btns1" onClick={() => swiper.slidePrev()}>
                <FaArrowLeft />
            </button>
            <button className="swiper-nav-btns2" onClick={() => swiper.slideNext()}>
                <FaArrowRight />
            </button>
        </div>
    );
};

export default SwiperArrowButtons;