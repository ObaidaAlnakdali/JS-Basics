let pass = document.querySelector("#password");
let passConfirm = document.querySelector("#confirmation");
let botton = document.querySelector("button");
botton.addEventListener("click", ()=>{
    if (pass.value != passConfirm.value){
        pass.style = "border: 1px solid red";
        passConfirm.style = "border: 1px solid red";
    }else {
        pass.style.border = "";
        passConfirm.style.border = "";
    }
});

