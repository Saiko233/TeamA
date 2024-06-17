const slides = $("#js-slide").find("img");
const slideLength = slides.length;
slides.eq(0).show();
const fade = 1500;
const slidesshow = () => {
  slides.eq(now % slideLength).fadeOut(fade); // fadeOutの()に変数をいれる
  slides.eq(next % slideLength).fadeIn(fade); // fadeInの()に変数をいれる
  now++
  next++
};

slideshow();