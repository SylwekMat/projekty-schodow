var slideIndex = 1;
var opened = false;
setImages();
createModalImages();
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex = parseInt(slideIndex) + parseInt(n)));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function openModal() {
  document.getElementsByClassName("modal")[0].style.display = "block";
  opened = true;
}

function closeModal() {
  document.getElementsByClassName("modal")[0].style.display = "none";
  opened = false;
}

function setImages() {
  let images = document.querySelectorAll(".lightbox img");
  for (var i = 0; i < images.length; i++) {
    var self = images[i];
    self.setAttribute("slide", i + 1);
    self.addEventListener(
      "click",
      function (event) {
        onImageClick(event.target);
      },
      false
    );
  }
}

function onImageClick(image) {
  openModal();
  currentSlide(image.getAttribute("slide"));
}

function createModalImages() {
  let images = document.querySelectorAll(".lightbox img");
  let modal = document.querySelector(".modal");
  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  for (let i = 0; i < images.length; i++) {
    let cloneImg = document.createElement("img");
    cloneImg.setAttribute("src", images[i].getAttribute("src"));
    let slide = document.createElement("div");
    slide.classList.add("slides");
    slide.append(cloneImg);
    modalContent.append(slide);
  }
  modal.append(modalContent);
}

document.onkeydown = checkKey;

function checkKey(e) {
  if (!opened) return;
  e = e || window.event;

  if (e.keyCode == "37") {
    plusSlides(-1);
  } else if (e.keyCode == "39") {
    plusSlides(1);
  } else if (e.keyCode === 27) {
    closeModal();
  }
}
