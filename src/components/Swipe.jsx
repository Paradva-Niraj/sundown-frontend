import '../style/components/swipe.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../style/components/styles.css';

import { Pagination } from 'swiper/modules';

function Swipe() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                grabCursor={true}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <img src="nike.svg" />
                    <p>Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="afterplay.svg" />
                    <p>Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.</p>
                </SwiperSlide>
                 <SwiperSlide>
                    <img src="arcteryx.svg" />
                    <p>Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.</p>
                </SwiperSlide>
                 <SwiperSlide>
                    <img src="converse.svg" />
                    <p>Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women's, Men's and Kid's zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.</p>
                </SwiperSlide>
                 <SwiperSlide>
                    <img src="medialink.svg" />
                    <p>Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.</p>
                </SwiperSlide>
                 <SwiperSlide>
                    <img src="hunter.svg" />
                    <p>Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.</p>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}

export default Swipe;