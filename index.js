const container = document.querySelector(".container");
const promptButton = document.querySelector("#prompt");
const reset = document.querySelector("#reset");

let promptUser = () => {
  //Prompts the user for grid size.
  let userInput = prompt("What's your input? ");
  if (userInput < 1 || userInput > 100) {
    alert("ERROR! Please enter a value between 1 and 100");
  } else {
    //Creates a x*x grid and ajusts height and width accordingly.
    for (i = 0; i < userInput * userInput; i++) {
      const grid = document.createElement("div");
      grid.style.width = 300 / userInput + "px";
      grid.style.height = 300 / userInput + "px";
      grid.classList.toggle("grid");
      container.append(grid);

      // Changes grid box color when a cursor is hovered.
      grid.addEventListener("mouseleave", (e) => {
        grid.style.backgroundColor = "black";

        //Clears the grid after use.
        reset.addEventListener("click", (e) => {
          for (x = 0; x < userInput * userInput; x++) {
            container.removeChild(grid);
          }
        });
      });
    }
  }
};

//Button to prompt user
promptButton.addEventListener("click", (e) => {
  promptUser();
});
