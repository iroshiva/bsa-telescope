import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const swiperConfig = () => {
  const recenPostsSlider = document.querySelector(".swiper-posts");

  if (!recenPostsSlider) {
    return;
  }

  const slideOffsetValue = (swiper) => {
    const spaceBetween = swiper.params.spaceBetween;
    const slideActiveIndex = swiper.activeIndex;
    const slideWidth = swiper.slidesSizesGrid[slideActiveIndex];
    const slidesOffsetAfterValue = slideWidth + spaceBetween;

    return slidesOffsetAfterValue;
  };

  const recenPostsSwiper = new Swiper(recenPostsSlider, {
    modules: [Navigation],
    slidesPerView: 1.2,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
      900: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: (swiper) => {
        if (
          swiper.params.slidesPerView === 1 ||
          swiper.slides.length === 1 ||
          swiper.currentBreakpoint < 900
        ) {
          return;
        }
        swiper.params.slidesOffsetAfter = slideOffsetValue(swiper);
        swiper.update();
      },
      resize: (swiper) => {
        if (
          swiper.params.slidesPerView === 1 ||
          swiper.slides.length === 1 ||
          swiper.currentBreakpoint < 900
        ) {
          return;
        }
        swiper.params.slidesOffsetAfter = slideOffsetValue(swiper);
      },
    },
  });
};

export default swiperConfig;
