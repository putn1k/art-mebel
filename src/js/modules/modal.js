import {
  Options,
} from './options.js';

const simpleModal = new HystModal( Options.Modal );

const initModal = ( name, handler = 'data-hystmodal' ) => {
  name.config.linkAttributeName = handler;
  name.init();
};

const initModals = () => {
  initModal( simpleModal );
};

export {
  simpleModal,
  initModals,
};
