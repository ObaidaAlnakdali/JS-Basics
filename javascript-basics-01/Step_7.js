let shoeSize = document.querySelector("#shoe_size");
let birthDate = document.querySelector("#year");
let button = document.querySelector("#validate");

calcShoe = (shoeSize, Date) => {
    let result = shoeSize * 2;
        result += 5;
        result *= 50;
        result -= Date;
        result += 1766;
    return result;
  };
  
  button.addEventListener("click", () => {
    alert("Random result: " + calcShoe(shoeSize.value, birthDate.value));
  });