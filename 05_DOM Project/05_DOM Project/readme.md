# DOM ASSIGNMENT
## 05_DOM PROJECT
### Output:
![AlterText](./Output/DOM%20P2%20SS.png)
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