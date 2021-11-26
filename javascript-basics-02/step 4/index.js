let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let cityInput = document.querySelector("#city");
let resetBtn = document.querySelector("button");

resetBtn.addEventListener("click", () => {
    if (confirm("Are you sure?")) {
        nameInput.value = "";
        surnameInput.value = "";
        cityInput.value = "";
    }
});