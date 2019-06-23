import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface, SwiperLazyInterface } from 'ngx-swiper-wrapper';
 
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};


@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  public show: boolean = true;
  //  swiper = new Swiper('.swiper-container', {
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  // });
  loading:SwiperLazyInterface ={
    loadingClass: 'loading',
    // loadedClass: '',
    preloaderClass: 'loading'
    
  }
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true,
    // lazy: this.loading,
    autoplay:true,
    preloadImages:true,
    loop:true,
    loopedSlides:4,
    runCallbacksOnInit:true
    // clickable: true
  };
 

  
  constructor() {}
  ngOnInit() {
  }
  
  
}
