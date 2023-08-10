
//open tabconent
function openProjects(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    if(evt) evt.currentTarget.className += " active";
    else document.querySelector('div.tablinks').className += " active";
}

document.body.addEventListener('DOMContentLoaded', openProjects(event, 'all'));


//write text about coding
function writeText(id, text, speed){

  let elem = document.getElementById(id),
  txt = text.join("").split("");

  let interval = setInterval(function(){

  if(!txt[0]){

    return clearInterval(interval);
  };

  elem.innerHTML += txt.shift();
  }, speed != undefined ? speed : 100);
  
  return false;
};
setTimeout(() => 
writeText(
  "myText",
  [
  "I code beautifully simple things, \n",
  "and I love what I do.\n"
  ]
), 3000);


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
