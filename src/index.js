import './style/main.scss';

let cells = document.querySelectorAll('#field td');
//start(cells);

function start(cells) {
  let index = 0;
  for (let cell of cells) {
    cell.addEventListener('click', function () {
      this.textContent = [ 'X', 'O' ][index % 2];
      index++;
    });
  }
}

start();
// start();
