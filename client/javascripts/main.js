var headerScroll = function(){
 this.lastScrollTop = 0;
 var initialScroll = window.pageYOffset || document.documentElement.scrollTop;
 if(initialScroll > 140){
   document.getElementsByClassName("js-header")[0].classList.add("header--sticky");
 }
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop){
        // downscroll code
        if((window.scrollY > 80)){
          document.getElementsByClassName("js-header")[0].classList.add("header--sticky");
        }
    } else {
       // upscroll code
        if((window.scrollY <= 80)){
         document.getElementsByClassName("js-header")[0].classList.remove("header--sticky");
        }
    }
    this.lastScrollTop = st;
 }, false);
}
headerScroll();

/**
  * @ Navbar Drawer
  **/

var navbarDrawer = {
  el: {
    body: document.getElementsByTagName("body")[0],
    mask : document.getElementsByClassName("js-navbar-mask")[0],
    navbar : document.getElementsByClassName("js-navbar-main")[0],
    navbarButton : document.getElementsByClassName("js-navbar-menu-button")[0]
  },
  showMenu: function(){
    this.el.navbar.classList.add("is-visible");
    this.el.body.classList.add("no-scroll");
  },
  hideMenu: function(){
    this.el.navbar.classList.remove("is-visible");
    this.el.navbar.scrollTop = 0;
    this.el.body.classList.remove("no-scroll");
  },
  inIt: function(){
    var _this = this,
        mask = document.getElementsByClassName("js-navbar-mask")[0],
        navbar = document.getElementsByClassName("js-navbar-main")[0],
        navbarButton = document.getElementsByClassName("js-navbar-menu-button")[0];
    // bind the click on hamburger
    mask.addEventListener('click', function(){
      _this.hideMenu();
    });
    navbar.addEventListener('click', function(e){
      e.stopPropagation();
    });
    navbarButton.addEventListener('click', function(){
      _this.showMenu();
    });
    swipeHandle(_this, "js-navbar-mask");
    swipeHandle(_this, "js-navbar-main");
  }
}
navbarDrawer.inIt();


function swipeHandle(_this, elementClassName){
      var _swipeThis = _this;
      var touchsurface = document.getElementsByClassName(elementClassName)[0],
          sliderThis = this,
          threshold = 50,
          allowedTime = 1000,
          restraint = 100;
      var elapsedTime,
          startTime,
          swipedir,
          startX,
          startY,
          dist,
          distX,
          distY;

      touchsurface.addEventListener('touchstart', function (e) {
        // console.log(e);
        var touchobj = e.changedTouches[0];
        swipedir = 'none';
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime();
          /*
           * record time when finger first
           * makes contact with surface
           */
      }, false)

      touchsurface.addEventListener('touchmove', function (e) {
        // console.log(e);
        var touchobj = e.changedTouches[0];
        if (startX - touchobj.pageX > 5 || touchobj.pageX - startX > 5) {
          if (e.preventDefault)
            e.preventDefault();
          e.returnValue = false;
        }
      }, false)

      touchsurface.addEventListener('touchend', function (e) {
        // console.log(e);
        // var setTimeOutFlag = false;
        var touchobj = e.changedTouches[0];
        distX = touchobj.pageX - startX;
        distY = touchobj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
            swipedir = (distX < 0) ? 'left' : 'right';
          }
        }
        if(swipedir === 'left'){
          _swipeThis.hideMenu();
        }

      }, false)
}
