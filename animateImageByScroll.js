window.onscroll = function () {
  animateImages(24, 10, 25, renderImage)
};

/*
* allImageNumber: number of all pictures
* the initial numbering of the images (now it's 10. m-10.png)
* pixelChange:  animation speed.
* renderFunction: this function will get the actual image number and it will render to the screen
*/
function animateImages(allImageNumber, startImageIndex, pixelChange, renderFunction) {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const restartPixel = pixelChange * allImageNumber;
  let restartCounter = 1;
  if (scrollTop > restartPixel) {
    restartCounter = Math.ceil(scrollTop / restartPixel);
  }
  restartCounter = restartCounter - 1;
  const currentImageNumber = (Math.ceil(scrollTop / pixelChange) + startImageIndex - restartCounter * allImageNumber);
  renderFunction(currentImageNumber);
}

function renderImage(ImageNumber) {
  const imagePath = 'motion/m-' + ImageNumber + '.png';
  document.getElementById("catpic").srcset = imagePath + ' 400w';
}