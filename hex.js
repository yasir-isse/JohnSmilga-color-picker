const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const randomNumber = () => Math.floor(Math.random() * hex.length);

const hexGenerator = () => {
  let randomSelect = "#";
  for (let i = 0; i < 6; i++) {
    randomSelect += hex[randomNumber()];
  }
  return randomSelect;
};

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = hexGenerator();
  color.textContent = hexGenerator();
});
