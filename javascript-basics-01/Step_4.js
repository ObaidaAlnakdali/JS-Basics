let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let city = document.querySelector("#city");
let button = document.querySelector("#validate");

button.addEventListener("click", () => {
    if (this.name != null && this.surname != null && this.city != null){
        alert("Name: " + name.value + "\nSurname: " + surname.value + "\nCity: " + city.value);
    }
  });
