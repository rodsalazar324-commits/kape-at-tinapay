const welcome = document.querySelector(".welcome");
const button = document.getElementById("changeUser");

const lines = [
  "Isang Pahina",
  "Isang Alaala",
  "Isang Umaga",
  "Isang Kape"
];

button.addEventListener("click", () => {
  const random = Math.floor(Math.random() * lines.length);
  welcome.textContent = lines[random];
});