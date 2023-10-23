import {
  initSlider
} from './utils.js';
import {
  Options
} from './options.js';

const configSwiper = Options.Swiper;

const initProjectCardGallery = () => {
  const cardNodes = document.querySelectorAll( '.project-card' );
  cardNodes.forEach( ( card ) => {
    initSlider( card.querySelector( '.project-card__gallery' ), configSwiper.ProjectCard, false );
  } );
};

const initSliders = () => {
  initSlider( '.main-first', configSwiper.Hero );
  initSlider( '.main-testimonials__slider', configSwiper.Reviews );
  initProjectCardGallery();
};

export {
  initSliders,
};
