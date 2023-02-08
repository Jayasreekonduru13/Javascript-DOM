//ass7.1
let list=document.querySelectorAll(".main__languages>a");
for( let element of list){
    if (element.innerText.includes("2.0")){
        element.style.display="none";
    }
}

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

