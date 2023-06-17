const IMAGES_TO_DISPLAY = 3;

const carousel = document.querySelector(".img-container");
const carouselWidth = carousel.offsetWidth;
const imgSlider = document.querySelector(".img-slider");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const imageContents = document.querySelectorAll(".img-content").length;
let count = IMAGES_TO_DISPLAY;
let containerCount = 1;

prevButton.classList.add("disabled");

nextButton.onclick = function () {
  removeBgCoverClass();
  if (count < imageContents) {
    imgSlider.style.left = "-" + containerCount * carouselWidth + "px";
    containerCount++;
    count += IMAGES_TO_DISPLAY;
    prevButton.classList.remove("disabled");
    if (count >= imageContents) {
      nextButton.classList.add("disabled");
    }
  }
};

prevButton.onclick = function () {
  removeBgCoverClass();
  if (count > IMAGES_TO_DISPLAY) {
    containerCount = containerCount - 1;
    imgSlider.style.left = "-" + (containerCount - 1) * carouselWidth + "px";
    count -= IMAGES_TO_DISPLAY;
    nextButton.classList.remove("disabled");
    if (count === IMAGES_TO_DISPLAY) {
      prevButton.classList.add("disabled");
    }
  }
};

function removeBgCoverClass() {
  const bgCover = document.querySelector(".img-bg-cover");
  bgCover?.classList.remove("img-bg-cover");
}

function getEventTarget(e) {
  e = e || this.event;
  return e.target || e.srcElement;
}

let ul = document.querySelector(".img-slider");
ul.onclick = function (event) {
  removeBgCoverClass();
  let target = getEventTarget(event);
  let li = target?.closest("li");
  let bgContent = li?.querySelector(".bg-content");
  bgContent?.classList.add("img-bg-cover");
};
