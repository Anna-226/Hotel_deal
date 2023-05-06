import '../styles/style.scss';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
   "use strict";
   burger('.icon-menu');

   const button = document.querySelector('.header__button');
   window.addEventListener('resize', () => {
      console.log(document.documentElement.clientWidth);
         if (document.documentElement.clientWidth <= 480) {
            document.querySelector('.menu__list').insertAdjacentElement('afterbegin', button);
         } else {
            document.querySelector('.header__buttons').insertAdjacentElement('afterbegin',button);
         }
   });

});

