import "./style/main.scss";

let cells = document.querySelectorAll("#field td");
start(cells);

function start(cells) {
  let i = 0;
  for (let cell of cells) {
    cell.addEventListener("click", function () {
      this.textContent = ["X", "O"][i % 2];
      i++;
    });
  }
}

start()
// start();