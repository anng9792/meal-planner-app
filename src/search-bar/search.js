// Handle ingredient "to-do list" style tags
const ingredientInput = document.getElementById("ingredient-entry");
const ingredientList = document.getElementById("ingredient-list");

ingredientInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && this.value.trim() !== "") {
    e.preventDefault();

    const tag = document.createElement("div");
    tag.className = "ingredient-tag";
    tag.innerHTML = `${this.value} <span>&times;</span>`;

    // remove tag on click
    tag.querySelector("span").addEventListener("click", () => {
      tag.remove();
    });

    ingredientList.appendChild(tag);
    this.value = "";
  }
});

// Handle filter button toggle
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});
