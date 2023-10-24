import {
  iosVhFix,
} from './modules/utils.js';

import {
  validateForms,
} from './modules/validate.js';

import {
  initHeaderMenu,
} from './modules/header.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initSliders,
} from './modules/slider.js';

import {
  initScrollTop,
} from './modules/scroll-top.js';

import {
  initMap,
} from './modules/ymap.js';

import {
  initYTubeVideo,
} from './modules/yt-video.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();
  initHeaderMenu();

  window.addEventListener( 'load', () => {
    validateForms();
    initModals();
    initSliders();
    initScrollTop();
    initMap();
    initYTubeVideo();
  } );
} );
