# DOM ASSIGNMENT
## 06_DOM PROJECT
### Output:
![AlterText](./Output/DOM%20P3%20SS-1.png)
### Code:
``` javascript
//changing logo
document.querySelector(".logo").src="./assets/ineuron-logo.png";
```
### Task2

#### Output:
![AlterText](./Output/DOM%20P3%20SS-2.png)
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