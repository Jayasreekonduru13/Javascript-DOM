# DOM ASSIGNMENT
## DOMP8 PROJECT
### Output:
![AlterText](./ass8.1-after.png)
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
![AlterText](./ass8.2-before.png)
#### Code:
``` javascript
//ass8.2
document.body.style.background="none";
```

### Task3

#### Output:
![AlterText](./ass8.3-after.png)
#### Code:
``` javascript
//ass8.3
let navbar=document.querySelector(".navbar-toggler");
navbar.onclick=function(){
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
}
```