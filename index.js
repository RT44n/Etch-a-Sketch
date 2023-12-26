const container = document.querySelector(".container");
const promptButton = document.querySelector("#prompt");
userInput = 10;

window.addEventListener("beforeunload", (event) => {
  let userprompt = prompt("ARE YOU SURE?");
});
let promptUser = () => {
  let userInput = prompt("What's your input? ");
  if (userInput < 1 || userInput > 100) {
    alert("ERROR! Please enter a value between 1 and 100");
  } else {
    for (i = 0; i < userInput * userInput; i++) {
      const grid = document.createElement("div");
      grid.style.width = 300 / userInput + "px";
      grid.style.height = 300 / userInput + "px";
      grid.classList.toggle("grid");
      container.append(grid);

      // Changes grid box color when a cursor is hovered.
      grid.addEventListener("mouseleave", (e) => {
        grid.style.backgroundColor = "black";
      });
    }
  }
};
promptButton.addEventListener("click", (e) => {
  promptUser();
});
