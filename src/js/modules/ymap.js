import {
  Options,
} from './options.js';

const configOptions = Options.MainMap;

const getMap = (config) => new ymaps.Map(document.querySelector( config.selector ), {
  center: config.center,
  zoom: config.zoom,
});

const getPlacemark = (config) => new ymaps.Placemark( config.center, null, config.pin );

const setupConfigMap = ( map ) => {
  map.controls.remove( 'searchControl' );
  map.controls.remove( 'trafficControl' );
  map.controls.remove( 'typeSelector' );
  map.controls.remove( 'fullscreenControl' );
  map.controls.remove( 'rulerControl' );
  map.behaviors.disable( 'scrollZoom' );
};

const createMap = () => {
  if (!document.querySelector( configOptions.selector )) return;
  const map = getMap(configOptions);
  map.geoObjects.add( getPlacemark(configOptions) );
  setupConfigMap( map );
};


const initMap = () => {
  ymaps.ready( createMap );
};

export {
  initMap
};
