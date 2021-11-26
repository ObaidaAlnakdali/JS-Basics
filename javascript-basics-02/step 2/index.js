let inputName = document.querySelector("#name");

inputName.addEventListener("blur", () => {
  alert("thank you for participating! \n" + inputName.value);
});