let num1 = document.querySelector("#first_number");
let num2 = document.querySelector("#second_number");
let button = document.querySelector("#validate");

button.addEventListener("click", () => {
    if (num1 != null && num2 != null){
        alert(num1.value + " x " + num2.value + " = " + num1.value * num2.value);
    }
});