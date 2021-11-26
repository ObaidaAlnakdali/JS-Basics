let link = document.querySelectorAll("a");
let paragraph = document.querySelector("#texte");

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", () => {
    hideShow(link[i].id, paragraph);
  });
}

const hideShow = (id, paragraph) => {
  if (id == "show") {
    paragraph.style.display = "block";
  } else if (id == "hide") {
    paragraph.style.display = "none";
  }
};