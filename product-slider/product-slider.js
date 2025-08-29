import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    spaceBetween: 24,
    slidesPerView: 4,
    watchOverflow: false,
    navigation: {
      prevEl: ".custom-swiper-prev",
      nextEl: ".custom-swiper-next",
    },
  });
});
