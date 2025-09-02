const title = document.getElementById("title");

const paragraph = document.getElementById("paragraph");

paragraph.addEventListener("mouseover", function () {
  paragraph.textContent = "Yo' mama.";
});

paragraph.addEventListener("mouseout", function () {
  paragraph.textContent = "Hover to reveal a message.";
});

const button = document.getElementById("button");

const colors = ["springGreen", "deepSkyBlue", "gold", "hotPink", "darkViolet", "lawnGreen", "slateBlue", "darkOrange", "yellow"];

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  document.body.style.backgroundColor = randomColor;
});

