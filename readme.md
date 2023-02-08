# DOM ASSIGNMENT

## 04_DOM_PROJECT
### Output:
![AlterText](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)
### Code:
``` javascript
//Archer NameChange
document.querySelector(".clash-card__level--archer").nextElementSibling.innerHTML = "The Archer";

//Goblin NameChange
document.querySelector(".clash-card__level--goblin").nextElementSibling.innerHTML = "The Goblin";

//text color change
document.querySelectorAll(".clash-card__unit-stats").forEach((all) => {
    all.style.color = "#fff"
});
document.querySelectorAll(".no-border").forEach((all) => {
    all.style.color = "#fff"
});

//backgroundColor change
document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#eb9a3d";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ed5486";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f58f1f";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#80ba35";
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#50acfd";

```

## 05_DOM PROJECT
### Output:
![AlterText](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)
### Code:
```javascript
//Added new button
let btnElements=document.getElementById("btnElements");

let newButton=document.createElement("a");
newButton.classList.add("btn");
newButton.innerText="Pro Subscription";
newButton.href="index.html";
btnElements.appendChild(newButton);

//Added new recipe
let recipesSection=document.getElementById("recipesSection");

let newRecipe=document.createElement("a");
newRecipe.href="#";
newRecipe.innerText="Chinese (7)";
recipesSection.appendChild(newRecipe);

//Added new card
let recipeGallery=document.getElementById("recipeGallery");

let newcard=document.createElement("div");
newcard.classList.add("card");
recipeGallery.appendChild(newcard);
```

# DOM ASSIGNMENT
## 06_DOM PROJECT
### Output:
![AlterText](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)
### Code:
``` javascript
//changing logo
document.querySelector(".logo").src="./assets/ineuron-logo.png";
```
### Task2

#### Output:
![AlterText](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)
#### Code:
``` javascript
//changing price
document.querySelector(".app_price").firstElementChild.innerHTML="$10";

//adding linkedin icon
let linkedinIcon=document.createElement("div");
linkedinIcon.classList.add("footer_social_ico");
document.querySelector(".footer_social").appendChild(linkedinIcon);

let icon=document.createElement("i");
icon.classList.add("fa-brands", "fa-linkedin");
linkedinIcon.appendChild(icon);
```

## Dom Assignment 2.0 
### Task1

### Output:
![Alter Text](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)
### Code:
```javascript
let projects= document.querySelector("Header>nav>ul");
projects.lastElementChild.innerText="Projects";

let newnav=document.createElement("li");
projects.appendChild(newnav);

let hireme=document.createElement("a");
hireme.innerText="Hire Me";
newnav.appendChild(hireme);
```

### Task2

### Output:
![Alter Text](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)
### Code:
```javascript
document.querySelector(".search-field").firstElementChild.placeholder="Search My Project";
```

### Task3

### Output:
![Alter Text](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)
### Code:
```javascript
let employee=document.querySelector(".hero-left-section").lastElementChild.firstElementChild.nextElementSibling.nextElementSibling;
employee.innerText="an Employee";
```

### Task4

### Output:
![Alter Text](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)
### Code:
```javascript
document.querySelector(".hero-right-section").firstElementChild.src="./hiteshsir.jfif";
```

### Task5

### Output:
![Alter Text](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)
### Code:
```javascript
let supportButton=document.createElement("button");
supportButton.innerText="Support Me";
document.querySelector(".hero-right-section-btns").appendChild(supportButton);
```

## Second Assignment
### Task1

### Output:
![Alter Text](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)
### Code:
``` javascript
//Task 1
let aboutElements=document.querySelectorAll("h3");
for (let eachitem of aboutElements){
  eachitem.style.backgroundColor="#d9d9f7";
}
```
### Task2
### Output:
![Alter Text](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)
### Code:
``` javascript
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
```
## Third Assignment
### Task1
### Output:
![Alter Text](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)
### Code:
``` javascript
document.querySelector(".enterName").value="FSJS2.0";
document.querySelector(".enterMail").value="fsjs@ineuron.ai";
document.querySelector(".enterMessage").value="Hello World!";

document.querySelector(".userName").value="FSJS2.0";
document.querySelector(".userEmail").value="fsjs@ineuron.ai";
document.querySelector(".userMessage").value="Hello World!";
```

## DOM P7 PROJECT
### Task1

### Output:
![AlterText](./DOM%20P7/DOM%20P7/ass7.1-after.png)
### Code:
``` javascript
//ass7.1
let list=document.querySelectorAll(".main__languages>a");
for( let element of list){
    if (element.innerText.includes("2.0")){
        element.style.display="none";
    }
}
```
### Task2

#### Output:
![AlterText](./DOM%20P7/DOM%20P7/ass7.2-after.png)
#### Code:
``` javascript
//ass7.2
document.querySelector(".main__form-btn").disabled=false;
document.querySelector(".main__form-input").disabled=false;
document.querySelector(".main__form-input").value="iNeuron";

document.querySelector("form").addEventListener("submit",(event)=> {
    let list=document.querySelectorAll(".main__languages>a");
    for( let element of list){
        if (element.innerText.includes("2.0")){
            element.style.display="Inline";
        }
    }
    document.querySelector(".main__form-input").value="";
    event.preventDefault();
})
```


## DOMP8 PROJECT
### Output:
![AlterText](./DOM%20P8/DOM%20P8/ass8.1-after.png)
### Code:
``` javascript
//ass8.1
let list=document.querySelector("aside");
list.style.overflow="scroll";

let newhr=document.createElement("hr");
newhr.classList.add("hr-line");
list.appendChild(newhr);

let heading=document.createElement("h2");
heading.classList.add("new-head");
heading.innerText="This is my custom heading";
list.appendChild(heading);

let para=document.createElement("p");
para.classList.add("new-p");
para.innerText="This is a custom paragraph under a custom heading";
list.appendChild(para);
```
### Task2

#### Output:
![AlterText](./DOM%20P8/DOM%20P8/ass8.2-after.png)
#### Code:
``` javascript
//ass8.2
document.body.style.background="none";
```

### Task3

#### Output:
![AlterText](./DOM%20P8/DOM%20P8/ass8.3-after.png)
#### Code:
``` javascript
//ass8.3
let navbar=document.querySelector(".navbar-toggler");
navbar.onclick=function(){
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
}
```

## DOM P9 PROJECT
### Output:
![AlterText](./DOM%20P9/DOM%20P9/ass9.1-after.png)
### Code:
``` javascript
//ass9.1
document.querySelector("h1").style.color= "#d41949";
```
### Task2

#### Output:

![AlterText](./DOM%20P9/DOM%20P9/ass9.2-after.png)
#### Code:

``` javascript
//ass9.2
let hover= document.querySelector("button")

hover.onmouseover=function(){
    hover.style.backgroundColor="#d41949";
}
hover.onmouseout=function(){
    hover.style.backgroundColor="hsl(158, 36%, 37%)";
}
