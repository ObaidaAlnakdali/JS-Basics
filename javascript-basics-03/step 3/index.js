let color = document.querySelectorAll(".color");
let text = document.querySelector("#text");

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("click", () => {
        changeColor(color[i].className, text);
    });
}

const changeColor = (classN, text) => {
    if (classN.includes("green")) {
        text.style.color = "green"
    } else if (classN.includes("red")) {
        text.style.color = "red"
    } else if (classN.includes("blue")) {
        text.style.color = "blue"
    }
}