import {
  Options,
} from './options.js';

import {
  sendData,
} from './utils.js';

import {
  simpleModal,
} from './modal.js';

const validateConfig = Options.ValidationErrors;
const maskConfig = Options.Mask;
const requestConfig = Options.Requests;

const isSendOk = () => {
  simpleModal.open( '#send-ok-modal' );
};

const isSendError = ( target ) => {
  target.classList.add( validateConfig.errorFormClass );
  setTimeout( () => {
    target.classList.remove( validateConfig.errorFormClass );
  }, 1500 );
};

export const validateForms = () => {
  const forms = document.querySelectorAll( 'form[data-validate]' );

  if ( forms.length < 1 ) return;

  forms.forEach( ( form ) => {
    const formID = `#${form.id}`;
    const validationRules = new JustValidate( formID, validateConfig );
    const requiredFields = document.querySelectorAll( `${formID} [required]` );
    new JustPhoneMask( maskConfig );

    if ( requiredFields.length < 1 ) return;

    requiredFields.forEach( ( input ) => {
      switch ( input.dataset.validate ) {
        case 'name':
          validationRules.addField( `${formID} [data-validate="name"]`, [ {
            rule: 'required',
            value: true,
            errorMessage: 'Поле обязательно для заполнения'
          }, ] );
          break;
        case 'email':
          validationRules.addField( `${formID} [data-validate="email"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обязательно для заполнения'
            },
            {
              rule: 'email',
              errorMessage: 'Некорректный адрес электронной почты',
            },
          ] );
          break;
        case 'phone':
          validationRules.addField( `${formID} [data-validate="phone"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обязательно для заполнения',
            },
            {
              rule: 'minLength',
              value: document.querySelector( `${formID} [data-validate="phone"]` ).dataset.mask.length,
              errorMessage: 'Введите телефон в формате +7 (---) --- -- --',
            },
          ] );
          break;
        case 'message':
          validationRules.addField( `${formID} [data-validate="message"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'Поле обязательно для заполнения',
            },
            {
              rule: 'minLength',
              value: 10,
              errorMessage: 'Слишком короткое сообщение',
            },
            {
              rule: 'maxLength',
              value: 200,
              errorMessage: 'Длина сообщения превышает 200 символов',
            },
          ] );
          break;
        case 'confirm':
          validationRules.addField( `${formID} [data-validate="confirm"]`, [ {
            rule: 'required',
            value: true,
            errorMessage: 'Подтвердите согласие на обработку персональных данных',
          }, ] );
          break;
      }
    } );
    validationRules.onSuccess( ( evt ) => {
      sendData( evt, requestConfig.HandlerURL, isSendOk, isSendError );
    } );
  } );
};
