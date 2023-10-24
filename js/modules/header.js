import {
  isEscKey,
  breakpointChecker
} from './utils.js';

import {
  Options,
} from './options.js';

const resetOffsetTop = ( node ) => {
  if ( !node ) return;
  document.documentElement.style.setProperty( '--offset-top', `${node.offsetHeight}px` );
};

const initStickyHeader = ( node, target ) => {
  if ( !node || !target ) return;
  const cb = ( entries ) => {
    entries.forEach( ( entry ) => {
      if ( !entry.isIntersecting ) {
        node.classList.add( 'is-sticky' );
      } else {
        node.classList.remove( 'is-sticky' );
      }
    } );
  };

  new IntersectionObserver( cb, Options.Observer.Header ).observe( target );
};

export const initHeaderMenu = () => {
  const contentNode = document.querySelector( '.site__content' );
  const headerTopNode = document.querySelector( '.header-top' );
  const headerNode = document.querySelector( '.header-main' );

  const modalNode = document.querySelector( '.header-modal' );
  const modalTriggerNode = document.querySelector( '.header-main__burger button' );

  if ( !modalNode || !modalTriggerNode ) return;

  const onEscKeydown = ( evt ) => {
    if ( isEscKey( evt ) && modalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      closeModal();
      return;
    }
  };

  const onMissclickHandler = ( evt ) => {
    if ( evt.target === modalNode ) {
      closeModal();
    }
  };

  function openModal() {
    document.documentElement.classList.add( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'false' );
    modalTriggerNode.classList.add( 'is-expanded' );
    document.addEventListener( 'keydown', onEscKeydown );
    modalNode.addEventListener( 'click', onMissclickHandler );
  }

  function closeModal() {
    document.documentElement.classList.remove( 'is-block-scroll' );
    modalNode.setAttribute( 'aria-hidden', 'true' );
    modalTriggerNode.classList.remove( 'is-expanded' );
    document.removeEventListener( 'keydown', onEscKeydown );
    modalNode.removeEventListener( 'click', onMissclickHandler );
  }

  initStickyHeader( headerNode, headerTopNode );
  initStickyHeader( contentNode, headerTopNode );
  breakpointChecker( () => {
    resetOffsetTop( headerNode );
  }, () => {
    resetOffsetTop( headerNode );
  } );

  modalTriggerNode.addEventListener( 'click', ( evt ) => {
    evt.preventDefault();
    modalNode.getAttribute( 'aria-hidden' ) === 'true' ? openModal() : closeModal();
  } );
};
