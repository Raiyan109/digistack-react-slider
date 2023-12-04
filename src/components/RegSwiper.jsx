import '../styles.css'
import { useEffect, useRef } from "react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { register } from "swiper/element/bundle";
register();
const RegSwiper = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            // pagination: true,
            // These are new...
            injectStyles: [
                `
                .swiper{
                    background-color: purple;
                    position: relative;
                    height:700px;
                }
                .swiper-wrapper{
                    background-color: red;
                    position: relative;
                    height:500px;
                    top:150px;
                }
                .swiper-slide{
                    background-color: white;
                    
                    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    display:flex;
    
                }
                
              .swiper-button-next,
              .swiper-button-prev {
                background-color: white;
                padding: 8px 16px;
                border-radius: 100%;
                border: 2px solid black;
                color: red;
                position:absolute;
                top:45px;
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
        swiperContainer.initialize();
    }, []);
    return (
        <div style={{ marginTop: '450px', overflowX: 'hidden' }}>
            <swiper-container ref={swiperRef} init="false"
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
                <swiper-slide class="blue-slide">Slide 1</swiper-slide>
                <swiper-slide class="yellow-slide">Slide 2</swiper-slide>
                <swiper-slide class="green-slide">Slide 3</swiper-slide>
            </swiper-container>
        </div>
    );
};

export default RegSwiper;