import {projects} from './code.js';

//console.log(projects);

let mobileList = document.getElementsByClassName("mobile")[0];
let websiteList = document.getElementsByClassName("website")[0];
console.log(mobileList);

let mobileInform = projects.get('mobileInfo');
console.log(mobileInform);

let websiteInform = projects.get('websiteInfo');




for(let proj of mobileInform.values()) {
  console.log(proj)
    proj.addMeHtml(mobileList);
}
  
for(let proj of websiteInform.values()) {
    proj.addMeHtml(websiteList);
}
