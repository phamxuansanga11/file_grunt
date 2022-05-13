//get element header
const header = document.querySelector("header .bg__header .header");
let heightHeader = header.offsetHeight;

//get height background home
let backGroundHome = document.querySelector("header .bg__header");
let heightBackGroundHome = backGroundHome.offsetHeight;

//scrollY active header
window.addEventListener("scroll", (e) => {
  let scrollY = window.pageYOffset;
  if (scrollY > heightBackGroundHome - (heightHeader + 60)) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

//get element tag a from header & event scroll to section when click to tag a menu
const tagAMenu = document.querySelectorAll("header .bg__header .header a");

const sections = [];
tagAMenu.forEach((tagA, index) => {
  let href = tagA.getAttribute("href");
  let className = href.replace("#", "");
  let classSection = document.querySelector("." + className);
  sections.push(classSection);
  tagA.addEventListener("click", (e) => {
    e.preventDefault();
    tagAMenu.forEach((tagaActive) => {
      tagaActive.classList.remove("active");
    });
    tagAFooterClone.forEach((tagaClone) => {
      tagaClone.classList.remove("active");
    });
    let positionSection = classSection.offsetTop;
    window.scrollTo({
      top: positionSection - (heightHeader - 10),
      behavior: "smooth",
    });
    tagA.classList.add("active");
  });
});

//event scroll to section auto active menu
window.addEventListener("scroll", (e) => {
  let positionScrollY = window.pageYOffset;
  let positionScrollY2 = window.pageYOffset;
  sections.forEach((section, index) => {
    if (positionScrollY > section.offsetTop - heightHeader) {
      tagAMenu.forEach((removeTagA) => {
        removeTagA.classList.remove("active");
      });
      tagAMenu[index].classList.add("active");
    } else {
      tagAMenu[index].classList.remove("active");
    }
    if (positionScrollY2 > section.offsetTop - heightHeader) {
      tagAMenuFooter.forEach((removeTagA) => {
        removeTagA.classList.remove("active");
      });
      tagAMenuFooter[index].classList.add("active");
    } else {
      tagAMenuFooter[index].classList.remove("active");
    }
  });
});

//active menu footer
const tagAFooterClone = [];
const tagAMenuFooter = document.querySelectorAll(
  "footer .wrapper .footer__menu ul li a"
);
tagAMenuFooter.forEach((tagAFooter) => {
  tagAFooterClone.push(tagAFooter);
  tagAFooter.addEventListener("click", (e) => {
    e.preventDefault();
    tagAMenuFooter.forEach((tagaFooterActive) => {
      tagaFooterActive.classList.remove("active");
    });
    let href = tagAFooter.getAttribute("href");
    let className = href.replace("#", "");
    let classSection = document.querySelector("." + className);
    let positionSection = classSection.offsetTop;
    window.scrollTo({
      top: positionSection - (heightHeader - 10),
      behavior: "smooth",
    });
    tagAFooter.classList.add("active");
  });
});

const flickityOptions = (wrapper, options) => {
    return new Flickity(wrapper, options);
  };
  
  const btnCtrlSlider = (button) => {
      return document.querySelector(button)
  }

//slider
var elem = document.querySelector(".main-carousel");
var flkty = flickityOptions(elem, {
  // options
  cellAlign: "left",
  contain: true,
  draggable: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  imagesLoaded: true,
});

const btnNext = btnCtrlSlider(".content__project .content__project-btn .btn");
const btnPrev = btnCtrlSlider(".content__project .content__project-btn .btn-left");

btnNext.addEventListener("click", () => {
  flkty.next();
});

btnPrev.addEventListener("click", () => {
  flkty.previous();
});


//slider 2
const btnNext2 = btnCtrlSlider(".meet__content .btn__slider .btn");
const btnPrev2 = btnCtrlSlider(".meet__content .btn__slider .btn-left");

var elem2 = document.querySelector(".main-carousel-2");
var flkty2 = flickityOptions(elem2, {
  cellAlign: "left",
  contain: true,
  draggable: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  imagesLoaded: true,
});

btnNext2.addEventListener("click", () => {
  flkty2.next();
  flkty3.next();
});

btnPrev2.addEventListener("click", () => {
  flkty2.previous();
  flkty3.previous();
});

//button back to top
const btnBackToTop = document.querySelector("footer .backtoptop");
window.addEventListener("scroll", () => {
  let scrolledY = window.pageYOffset;
  if (scrolledY > heightBackGroundHome + 200) {
    btnBackToTop.style.display = "flex";
  } else {
    btnBackToTop.style.display = "none";
  }
});

btnBackToTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//slider mobile
var elem3 = document.querySelector(".main-carousel-3");
var flkty3 = flickityOptions(elem3, {
  // options
  cellAlign: "left",
  contain: true,
  draggable: true,
  wrapAround: true,
  prevNextButtons: false,
  pageDots: false,
  //   groupCells: 3,
});
