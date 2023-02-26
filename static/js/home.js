'use strict';

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


setTimeout(function(){
    bgImage.style.opacity = '1';
},1)

/* FUNCTIONS */

const revealWidget = function(domTitle, domContainer, domContent, nReveal, nHide){
    const windowHeight = window.innerHeight;
    const elementTop = profileContainer.getBoundingClientRect().top;


    if (elementTop < windowHeight - nReveal && elementTop > windowHeight - nHide) {
        domContent.style.left = '0';
        domTitle.style.right = '0';
        domContainer.classList.add("reveal");
    } else {
        domContent.style.left = '30%';
        domTitle.style.right = '30%';
        domContainer.classList.remove("reveal");
    }

}

const slideShow = function(){
    let n = 1;
    const limit = 4;

    setInterval(function(){
        bgImage.style.opacity = '0';
        n = (n % limit) + 1;
        let bgName = `/static/images/home/backgrounds/background_${n}.png`;

        let time = function(){
            setTimeout(function(){
                bgImage.src = bgName;
                bgImage.style.opacity = '1';
            },2000)
        }

        time();

    },6000);
}

/* MAIN */

window.addEventListener("scroll", function(){
    revealWidget(profileTitle, profileContainer, profileContent, 170,1270);
    revealWidget(serviceTitle, serviceContainer, serviceContent, 870,2770);
    revealWidget(projectTitle, projectContainer, projectContent, 1570,4270);
});

slideShow();

