"use strict";

const bgImage = document.querySelector(".background-image");

// PROFILE
const profileContainer = document.querySelector(".profile-container");
const profileTitle = document.querySelector(".profile-title");
const profileContent = document.querySelector(".profile-content");

// SERVICE
const serviceContainer = document.querySelector(".service-container");
const serviceTitle = document.querySelector(".service-title");
const serviceContent = document.querySelector(".service-content");

// PROJECT
const projectContainer = document.querySelector(".project-container");
const projectTitle = document.querySelector(".project-title");
const projectContent = document.querySelector(".project-content");

setTimeout(function () {
  bgImage.style.opacity = "1";
}, 1);

/* FUNCTIONS */

const isElementXPercentInViewport = function (el, percentVisible) {
  let rect = el.getBoundingClientRect(),
    windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return !(
    Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100) <
      percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
      percentVisible
  );
};

const revealWidget = function (domContainer, domTitle, domContent, percent) {
  if (isElementXPercentInViewport(domContainer, percent)) {
    domContent.style.left = "0";
    domTitle.style.right = "0";
    domContainer.classList.remove("hide");
  } else {
    domContent.style.left = "30%";
    domTitle.style.right = "30%";
    domContainer.classList.add("hide");
  }
};

const slideShow = function () {
  let n = 1;
  const limit = 4;

  setInterval(function () {
    bgImage.style.opacity = "0";
    n = (n % limit) + 1;
    let bgName = `/static/images/home/backgrounds/background_${n}.png`;

    let time = function () {
      setTimeout(function () {
        bgImage.src = bgName;
        bgImage.style.opacity = "1";
      }, 2000);
    };

    time();
  }, 6000);
};

/* MAIN */

const containers = [profileContainer, serviceContainer, projectContainer];

containers.forEach((container) => {
  container.classList.add("hide");
});

const percent = 100;

window.addEventListener("scroll", function () {
  revealWidget(profileContainer, profileTitle, profileContent, 20);

  revealWidget(serviceContainer, serviceTitle, serviceContent, 20);

  revealWidget(projectContainer, projectTitle, projectContent, 20);
});

slideShow();
