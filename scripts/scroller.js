let numberImage = 0;

const preloadImages = (count, path) => {
  for (let i = 1; i == count; i++) {
    image = new Image();
    image.src = `imgs/${path}/${i}.jpg`;
    console.log(`imgs/${path}/${i}.jpg`);
  }
};

const scrollerRender = (numImg, countImgs, path) => {
  prevImage = document.getElementById('img-prev');
  focusImage = document.getElementById('img-focus');
  nextImage = document.getElementById('img-next');
  counterSpan = document.getElementById('counter');
  prevBtn = document.getElementById('scroll-left');
  nextBtn = document.getElementById('scroll-right');

  numberImage = numberImage + numImg;

  if (numberImage >= countImgs) {
    nextBtn.disabled = true;
    nextImage.style.opacity = 0;
  } else {
    nextBtn.disabled = false;
    nextImage.style.opacity = 0.3;
  }

  if (numberImage == 1) {
    prevBtn.disabled = true;
    prevImage.style.opacity = 0;
  } else {
    prevBtn.disabled = false;
    prevImage.style.opacity = 0.3;
  }

  prevImage.src = `imgs/${path}/${numberImage - 1}.jpg`;
  focusImage.src = `imgs/${path}/${numberImage}.jpg`;
  nextImage.src = `imgs/${path}/${numberImage + 1}.jpg`;

  counterSpan.innerText = `${numberImage}/${countImgs}`;
};

const goToImg = (param, countImgs, path) => {
  scrollerRender(param, countImgs, path);
};
