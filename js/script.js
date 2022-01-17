'use strict';
window.addEventListener('DOMContentLoaded', function() {
const hamburger=document.querySelector('.hamburger'),
        menu=document.querySelector('.menu'),
        closeElem=document.querySelector('.menu__close'),
        menuLink=document.querySelector('.menu__link'),
        upbtn=document.querySelector('.pageup');
       
      
hamburger.addEventListener('click',()=>{
    menu.classList.add('active');
});
closeElem.addEventListener('click',()=>{
    menu.classList.remove('active');
});
menuLink.addEventListener('click',()=>{
  menu.classList.remove('active');
});
//var slider = tns({
//    container: '.cert-slider',
//   items: 1,
//    slideBy: 'page',
 //   autoplay: true
      
//  });

var slider = tns({
    container: '.certificates-slider__main',
    items: 1,
    slideBy: 'page',
    mouseDrag: 'mouseDrag',
    autoplay: false,  
    center:true,    
    nav:false,
   // viewportMax: 300,
   // autoWidth:false,  
    
    controls: false
  });
  document.querySelector('.certificates-slider__prev').onclick=function(){
    slider.goTo('prev');
  };
  document.querySelector('.certificates-slider__next').onclick=function(){
    slider.goTo('next');
  };

  window.addEventListener('scroll',()=>{
    
    if (document.documentElement.scrollTop>1200){
      upbtn.classList.add('pageup_show');
      upbtn.classList.remove('pageup_hide');
    }else{
      upbtn.classList.remove('pageup_show');
      upbtn.classList.add('pageup_hide');
    }
  });
});