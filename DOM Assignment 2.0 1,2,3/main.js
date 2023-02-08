//Task 1
let projects= document.querySelector("Header>nav>ul");
projects.lastElementChild.innerText="Projects";

let newnav=document.createElement("li");
projects.appendChild(newnav);

let hireme=document.createElement("a");
hireme.innerText="Hire Me";
newnav.appendChild(hireme);

//Task 2
document.querySelector(".search-field").firstElementChild.placeholder="Search My Project";

//Task 3
let employee=document.querySelector(".hero-left-section").lastElementChild.firstElementChild.nextElementSibling.nextElementSibling;
employee.innerText="an Employee";

document.querySelector(".hero-left-section").lastElementChild.lastElementChild.innerHTML="INeuron Intelligence Pvt Ltd";

//Task 4
document.querySelector(".hero-right-section").firstElementChild.src="./hiteshsir.jfif";

//Task 5
let supportButton=document.createElement("button");
supportButton.innerText="Support Me";
document.querySelector(".hero-right-section-btns").appendChild(supportButton);