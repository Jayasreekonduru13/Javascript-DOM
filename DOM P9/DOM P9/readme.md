# DOM ASSIGNMENT
## DOMP9 PROJECT
### Output:
![AlterText](./ass9.1-after.png)
### Code:
``` javascript
//ass9.1
document.querySelector("h1").style.color= "#d41949";
```
### Task2

#### Output:

![AlterText](./ass9.2-after.png)
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
