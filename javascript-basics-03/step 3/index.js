let color = document.querySelectorAll(".color");
let text = document.querySelector("#text");

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", () => {
        changeColor(color[i].className, text);
    });
}

const changeColor = (classN, text) => {
    text.style.color = className.substr(className.indexOf(" "));
}