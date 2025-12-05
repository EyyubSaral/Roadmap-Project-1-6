const def = document.querySelector(".default");
const dropdown = document.querySelector(".dropDown");
const container = document.querySelector(".container");

def.addEventListener("click", (e) => {
  dropdown.classList.toggle("open");
});

dropdown.addEventListener("click", (e) => {
  if (e.target && e.target.matches("p")) {
    def.textContent = e.target.textContent;
    dropdown.classList.remove("open");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".container")) {
    dropdown.classList.remove("open");
  }
});
