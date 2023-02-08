
//Task 2
let skills=document.createElement("div");
skills.classList.add("accordian");
document.querySelector(".accordian-wrapper").appendChild(skills);

let heading=document.createElement("h3");
heading.innerText="Skills";
skills.appendChild(heading);

let para=document.createElement("p");
para.innerText="I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the github.";
skills.appendChild(para);

//Task 1
let aboutElements=document.querySelectorAll("h3");
for (let eachitem of aboutElements){
  eachitem.style.backgroundColor="#d9d9f7";
}

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});