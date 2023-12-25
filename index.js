const container = document.querySelector(".container");
let userInput = 16;

// Creates userInput of divs that stack over eachother
for (j = 0; j < userInput; j++) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.toggle("gridContainer");
  container.append(gridContainer);

  // Creates userInput no of divs that fill in gridcontainer to create gridboxes
  for (i = 0; i < userInput; i++) {
    const grid = document.createElement("div");
    grid.style.border = "1px solid red";
    grid.classList.toggle("grid");
    gridContainer.append(grid);
  }
}
