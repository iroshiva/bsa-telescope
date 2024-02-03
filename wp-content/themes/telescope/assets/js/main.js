/**
 * SASS
 */
import "../sass/main.scss";

// import "./modules/_header";
import Header from "./modules/_header.js";
import swiperConfig from "./modules/_swiper.js";

window.addEventListener("DOMContentLoaded", () => {
  const header = new Header();
  header.init();
  swiperConfig();
});

window.addEventListener("resize", () => {
  swiperConfig();
});
