
num1 = document.querySelector("#first_number");
num2 = document.querySelector("#second_number");
button = document.querySelector("#validate");
button.addEventListener("click", () => {
  alert("The remainder of " +  num1.value + " / " + num2.value + " = " + (num1.value % num2.value));
});