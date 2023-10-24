const SITE_DIR = `${window.location.protocol}//${window.location.host}`;

export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    bodyMask: ' (___) ___ __ __',
  },
  ValidationErrors: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
    errorFormClass: 'shaked',
    errorTimeout: 1500
  },
  MainMap: {
    selector: '[data-ymap]',
    center: [ 53.233850, 44.878310 ],
    zoom: 15,
    pin: {
      iconLayout: 'default#image',
      iconImageHref: `${SITE_DIR}/img/default/custom-pin.svg`,
      iconImageSize: [ 40, 44 ],
      iconImageOffset: [ -20, -40 ]
    }
  },
  Observer: {
    Header: {
      rootMargin: '0px',
      threshold: 0
    },
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  Requests: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
  },
  Swiper: {
    Default: {
      slidesPerView: 1,
      spaceBetween: 30,
      watchSlidesProgress: true,
    },
    Hero: {
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      autoHeight: true,
      navigation: {
        prevEl: '.main-first__controls [data-to-slide="prev"]',
        nextEl: '.main-first__controls [data-to-slide="next"]',
      },
      pagination: {
        el: '.main-first__pagination',
        clickable: false,
      },
    },
    Reviews: {
      slidesPerView: 2,
      lazy: true,
      navigation: {
        prevEl: '.main-testimonials [data-to-slide="prev"]',
        nextEl: '.main-testimonials [data-to-slide="next"]',
      },
      pagination: {
        el: '.main-testimonials__pagination',
        clickable: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    },
    ProjectCard: {
      loop: true,
      lazy: true,
      spaceBetween: 0,
      navigation: {
        prevEl: '.project-card__controls [data-to-slide="prev"]',
        nextEl: '.project-card__controls [data-to-slide="next"]',
      },
    },
  }
};
