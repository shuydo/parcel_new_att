import $ from 'jquery';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';

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
  // fadeDuration: 0, // fitImagesInViewport: false,
  // imageFadeDuration: 0, // maxWidth: 1000,
  resizeDuration: 500, // maxHeight: 700,
  wrapAround: true, // showImageNumberLabel:false
});

const sendHandler = evt => {
  if (email.value === '') {
    evt.preventDefault();
    error.classList.remove('hide');
  } else error.classList.add('hide');
};

send_btn.addEventListener('click', sendHandler);
