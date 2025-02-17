import React from "react";
import "swiper/css";
import "swiper/css/autoplay"; // Autoplay 모듈의 CSS 가져오기
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Zustand 스토어에서 이미지 데이터 불러오기
import useImageStore from "../../store/useImgStore";

// Autoplay 모듈 등록

const ImageSwiper = () => {
  // Zustand 스토어에서 images 배열을 가져옴
  const { images } = useImageStore();

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000, // 3초마다 슬라이드 전환
        disableOnInteraction: false,
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
