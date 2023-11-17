

//write text about coding
function writeText(id, text, speed){

  let elem = document.getElementById(id),
  txt = text.join("").split("");

  let interval = setInterval(function(){

  if(!txt[0]){

    return clearInterval(interval);
  };

  elem.innerHTML += txt.shift();
  }, speed != undefined ? speed : 70);
  
  return false;
};
setTimeout(() => 
writeText(
  "myText",
  [
  "I code beautifully simple things, \n",
  "and I love what I do.\n"
  ]
), 1500);


//dynamic change opacity & positon by observer

const sections = document.querySelectorAll("section");

sections.forEach((el) => {
  el.classList.add("loading");
});

const observerOptions = {
  root: null,
  //rootMargin: "0px",
  threshold: 0.25
};

function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
    }
    
    else {
      entry.target.classList.remove("loaded");
    }
    // Add the else if  to fade out images out of the viewport
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((el) => observer.observe(el));


//hamburger menu
const hamburger = document.querySelector(".hamburger"),
navMenu = document.querySelector(".nav-menu"),
navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));
window.addEventListener("scroll", closeMenu);
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


//open tabconent
function openProjects(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}


//carousel

let carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(function (carousel) {
  let images = carousel.querySelector('.carousel').getElementsByTagName('img');
  let imageCount = images.length;
  let currentSlide = 0;
  let imagesPerSlide = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function adjustSlides() {

    if (window.innerWidth < 1024) {
      imagesPerSlide = 1;
    } else if (window.innerWidth > 1024 && window.innerWidth < 1600)
    {imagesPerSlide = 2;} else {
      imagesPerSlide = 3;
    }

    for (let i = 0; i < imageCount; i++) {
      images[i].style.display = 'none';
    }

    for (let i = currentSlide * imagesPerSlide; i < Math.min(imageCount, (currentSlide + 1) * imagesPerSlide); i++) {
      images[i].style.display = 'inline-block';
    }

    updateIndicators();
  }

  function nextSlide() {
    if (currentSlide < Math.ceil(imageCount / imagesPerSlide) - 1) {
      currentSlide++;
      adjustSlides();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      adjustSlides();
    }
  }

  function handleGesture() {
    if (touchEndX < touchStartX) {
      nextSlide(); // swipe left, go to the next slide
    } else {
      prevSlide(); // swipe right, go to the previous slide
    }
  }

  function updateIndicators() {
    let indicatorsContainer = carousel.querySelector('.indicators');
    indicatorsContainer.innerHTML = '';
  
    for (let i = 0; i < Math.ceil(imageCount / imagesPerSlide); i++) {
      (function (index) {
        let indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', function () {
          currentSlide = index;
          adjustSlides();
        });
        indicatorsContainer.appendChild(indicator);
      })(i);
    }
  
    // Highlight the current indicator
    let indicators = indicatorsContainer.querySelectorAll('.indicator');
    indicators[currentSlide].classList.add('active');
  }

  carousel.addEventListener('touchstart', function (event) {
    touchStartX = event.changedTouches[0].screenX;
  });

  carousel.addEventListener('touchend', function (event) {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
  });

  // Initial setup
  adjustSlides();

  // Add event listeners to arrows
  carousel.querySelector('.prev').addEventListener('click', prevSlide);
  carousel.querySelector('.next').addEventListener('click', nextSlide);

  // Adjust on window resize
  window.addEventListener('resize', adjustSlides);
});