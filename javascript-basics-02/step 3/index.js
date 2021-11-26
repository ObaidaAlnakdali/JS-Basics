let inputName = document.querySelector("#name");
let addText = document.querySelector("#addText");

inputName.addEventListener("keyup" || "keydown", () => {
    addText.textContent = inputName.value;
});


// var put = document.querySelector('input');
//     var division = document.querySelector('div');

//     function input(){
//         document.getElementById('addText').innerHTML = document.getElementById('name').value;
//     }