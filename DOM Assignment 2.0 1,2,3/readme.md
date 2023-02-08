# Dom Assignment 28th Jan

## DOM ASSIGNMENT 2.0 1,2,3
### Task1

### Output:
![Alter Text](./firstAssignmentImage/task1Output.png)
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
![Alter Text](./firstAssignmentImage/task2Output.png)
### Code:
```javascript
document.querySelector(".search-field").firstElementChild.placeholder="Search My Project";
```

### Task3

### Output:
![Alter Text](./firstAssignmentImage/task3Output.png)
### Code:
```javascript
let employee=document.querySelector(".hero-left-section").lastElementChild.firstElementChild.nextElementSibling.nextElementSibling;
employee.innerText="an Employee";
```

### Task4

### Output:
![Alter Text](./firstAssignmentImage/task4Output.png)
### Code:
```javascript
document.querySelector(".hero-right-section").firstElementChild.src="./hiteshsir.jfif";
```

### Task5

### Output:
![Alter Text](./firstAssignmentImage/task5Output.png)
### Code:
```javascript
let supportButton=document.createElement("button");
supportButton.innerText="Support Me";
document.querySelector(".hero-right-section-btns").appendChild(supportButton);
```

## Second Assignment
### Task1

### Output:
![Alter Text](./secondAssignmentImage/task2Output.png)
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
![Alter Text](./secondAssignmentImage/task2Output.png)
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
![Alter Text](./thirdAssignmentImage/task1Output.png)
### Code:
``` javascript
document.querySelector(".enterName").value="FSJS2.0";
document.querySelector(".enterMail").value="fsjs@ineuron.ai";
document.querySelector(".enterMessage").value="Hello World!";

document.querySelector(".userName").value="FSJS2.0";
document.querySelector(".userEmail").value="fsjs@ineuron.ai";
document.querySelector(".userMessage").value="Hello World!";
```

