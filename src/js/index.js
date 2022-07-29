import $ from 'jquery';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';

window.onload = () => {
  let lastPos = 0;
  const offset = 80;
  const header = document.querySelector(".header");
  const pos = () => window.pageYOffset || document.documentElement.scrollTop;
  const isHide = () => header.classList.contains("hide");

  window.addEventListener("scroll", () => {
    if (pos() > lastPos && !isHide() && pos() > offset) {
      header.classList.add("hide");
    } else if (pos() < lastPos && isHide()) header.classList.remove("hide");
    lastPos = pos();
  });
};

lightbox.option({
  alwaysShowNavOnTouchDevices: true, // albumLabel: "Картинка %1 из %2",
  disableScrolling: true, // positionFromTop:0,
  fadeDuration: 0, // fitImagesInViewport:true,
  imageFadeDuration: 0, // maxWidth:100,
  resizeDuration: 500, // maxHeight:200,
  wrapAround: true, // showImageNumberLabel:false
});

