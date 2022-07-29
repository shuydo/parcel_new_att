import $ from 'jquery';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';

// window.onload = () => {
//   let lastPos = 0;
//   const offset = 70;
//   const header = document.querySelector(".header");

//   const pos = () => window.pageYOffset || document.documentElement.scrollTop;
//   const isHide = () => header.classList.contains("hide");

//   window.addEventListener("scroll", () => {
//     if (pos() > lastPos && !isHide() && pos() > offset) {
//       header.classList.add("hide");
//     } else if (pos() < lastPos && isHide()) header.classList.remove("hide");
//     lastPos = pos();
//   });
// };

window.onload = () => {
  const pos = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const headerOffset = document.documentElement.clientWidth > 767 ? 70 : 120;
    if (pos() > headerOffset) header.classList.add('isVeiled');
    else header.classList.remove('isVeiled');
  });
};

lightbox.option({
  alwaysShowNavOnTouchDevices: true, // albumLabel: "Картинка %1 из %2",
  disableScrolling: true, // positionFromTop:0,
  fadeDuration: 0,
  fitImagesInViewport: false,
  imageFadeDuration: 0,
  maxWidth: 1000,
  resizeDuration: 500, // maxHeight: 700,
  wrapAround: true, // showImageNumberLabel:false
});
