import '../scss/main.scss'
import $ from 'jquery';
import { TweenMax, Power2, TimelineLite } from 'gsap/TweenMax';

window.$ = require('jquery');


/****************************/
/* UI Component             */
/****************************/
import select from './select';
select();

import toggle from './toggle';
toggle();

import layer from './layer';
layer();

import tab from './tab';
tab();

import motion from './motion';
motion();


/****************************/
/* Guide                    */
/****************************/
import guide from './guide';
guide();


/****************************/
/* Prismjs - code hilighter */
/****************************/
import Prism from 'prismjs';
Prism.highlightAll();



// 밑에 적으면 모바일에서 js 꼬임 왜그런것인가 
// 아래 코드에 버그가 있는것 같다
// PC는 잘됨


import form from './form';
form();

