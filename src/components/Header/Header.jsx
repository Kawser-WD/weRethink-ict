// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// import images

import ictOne from "../../assets/images/ict_1.jpg";
import ictTwo from "../../assets/images/ict_2.jpg";
import ictThree from "../../assets/images/ict_3.jpg";
import Container from "../Container/Container";

export default function Header() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={ictOne} className="block w-full sm:h-[480px] h-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ictTwo} className="block w-full sm:h-[480px] h-80" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ictThree} className="block w-full sm:h-[480px] h-80" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
