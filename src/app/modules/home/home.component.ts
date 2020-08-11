import { Component, OnInit } from '@angular/core';

declare var tjq: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.loadScript();
    // this.loadReqScripts();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initScript();
  }

  loadReqScripts() {
    // let path: string =
    //   './../../../assets/components/flexslider/jquery.flexslider-min.js';
    // import(path)
    //   .then((obj) => console.log(obj))
    //   .catch((err) => console.log(err));
  }

  loadCss() {
    // let head = <HTMLDivElement>document.head;
    // let script: any;
    // script = document.createElement('script');
    // script.innerHTML = '';
    // script.src = 'assets/components/revolution_slider/css/settings.css';
    // script.async = true;
    // script.defer = true;
    // body.appendChild(script);
    // script = document.createElement('script');
    // script.innerHTML = '';
    // script.src = 'assets/components/revolution_slider/css/style.css';
    // script.async = true;
    // script.defer = true;
    // body.appendChild(script);
    // script = document.createElement('script');
    // script.innerHTML = '';
    // script.src = 'assets/components/jquery.bxslider/jquery.bxslider.css';
    // script.async = true;
    // script.defer = true;
    // body.appendChild(script);
  }

  loadScript() {
    // let body = <HTMLDivElement>document.body;
    // let script: any;
    // script = document.createElement('script');
    // script.innerHTML = '';
    // script.src =
    //   'assets/components/revolution_slider/js/jquery.themepunch.tools.min.js';
    // script.async = true;
    // script.defer = true;
    // body.appendChild(script);
    // script = document.createElement('script');
    // script.innerHTML = '';
    // script.src =
    //   'assets/components/revolution_slider/js/jquery.themepunch.revolution.min.js';
    // script.async = true;
    // script.defer = true;
    // body.appendChild(script);
    // script = document.createElement('script');
    // script.innerHTML = '';
    // script.src = 'assets/components/flexslider/jquery.flexslider-min.js';
    // script.async = true;
    // script.defer = true;
    // body.appendChild(script);
    // script = document.createElement('script');
    // script.innerHTML = '';
    // script.src = 'assets/components/jquery.bxslider/jquery.bxslider.min.js';
    // script.async = true;
    // script.defer = true;
    // body.appendChild(script);
  }

  initScript() {
    tjq(document).ready(function () {
      tjq('.revolution-slider').revolution({
        sliderType: 'standard',
        sliderLayout: 'auto',
        dottedOverlay: 'none',
        delay: 9000,
        navigation: {
          keyboardNavigation: 'off',
          keyboard_direction: 'horizontal',
          mouseScrollNavigation: 'off',
          mouseScrollReverse: 'default',
          onHoverStop: 'on',
          touch: {
            touchenabled: 'on',
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: 'horizontal',
            drag_block_vertical: false,
          },
          arrows: {
            style: 'default',
            enable: true,
            hide_onmobile: false,
            hide_onleave: false,
            tmp: '',
            left: {
              h_align: 'left',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0,
            },
            right: {
              h_align: 'right',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0,
            },
          },
        },
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: 1170,
        gridheight: 646,
        lazyType: 'none',
        shadow: 0,
        spinner: 'spinner4',
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: 'off',
        autoHeight: 'off',
        hideThumbsOnMobile: 'off',
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: 'off',
          nextSlideOnWindowFocus: 'off',
          disableFocusListener: false,
        },
      });
    });
  }
}
