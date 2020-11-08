##  This project is about making animation with pictures by scrolling up and down.

core code: [animateImageByScroll.js](animateImageByScroll.js)

```javascript
window.onscroll = function () {
  animateImages(24, 10, 25, renderImage)
};
```

```javascript
function animateImages(allImageNumber, startImageIndex, pixelChange, renderFunction)
```
### animateImages:
* allImageNumber: number of all pictures
* startImageIndex: the initial numbering of the images (now it's 10. m-10.png)
* pixelChange:  animation speed.
* renderFunction: this function will get the actual image number and it will render to the screen

```javascript
function renderImage(ImageNumber)
```