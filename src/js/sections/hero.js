import Swiper, { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

const Hero = {
  onLoad() {
    this._init();
  },

  _init() {
    this.sliderWrapper = this.container.querySelector('.hero__slider');

    if (!this.sliderWrapper) return;

    this.slider = new Swiper(this.sliderWrapper, {
      slidesPerView: 'auto',
      centeredSlides: true,
      autoplay: true,
      loop: true,
      modules: [Pagination],
      pagination: {
        el: '.hero__pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  },
};

export default Hero;
