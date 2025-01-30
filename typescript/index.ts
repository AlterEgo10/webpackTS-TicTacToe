import '../src/style/main.css';

 const board = document.querySelector('.game-container') as HTMLElement;
 const button = document.querySelector('.button') as HTMLElement;
 const winMessage = document.querySelector('.winner') as HTMLElement;
 

let counter: number = 0;

type Turn = 'X' | 'O' | '';

let turn: Turn = 'X';

function listenBoard(): void{ 
  board.addEventListener('click', runGame);
}

function main():void{
  createBoard();
  listenBoard();
}

function runGame(e: Event): void{
  counter++;
 const boxId:string | null = (<HTMLElement>e.target).id;
if(boxId === null)return;
  const box: HTMLElement | null = document.querySelector(`#${boxId}`);
if(box === null || box.textContent !== '')return;
box.textContent = turn; const winner: boolean = checkWinner();
if (winner)endGame();
  else if(counter==9){
    board.removeEventListener('click',runGame);
    button.addEventListener('click', resetGame);
    winMessage.textContent = 'Draw';
    winMessage.setAttribute('display','block');
    button.style.visibility='visible';
    console.log('Draw');
  } else{switchPlayer();
  }
}


function endGame(): void{ 
  board.removeEventListener('click',runGame);
  button.addEventListener('click', resetGame);
  if(winMessage === null) return;
  winMessage.textContent = `Winner is ${turn}`;
  winMessage.setAttribute('display','block');
  button.style.visibility='visible';
}

function resetGame(): void{//gameBoard
  turn ='X';
  counter = 0;
  for(let i = 0;i <=8 ;i++){
    const box = document.querySelector(`#box-${i}`) as HTMLElement;
    box.textContent = '';
    button.style.visibility = 'hidden';
    winMessage.textContent = '';
    board.addEventListener('click', runGame);
  }
}

function checkWinner(): boolean{
  const boxes: Array<string> = getBoxes();
  return (
    (boxes[0]===boxes[1]&&boxes[1]===boxes[2]&&boxes[0]!=='')||
    (boxes[3]===boxes[4]&&boxes[4]===boxes[5]&&boxes[3]!=='')||
    (boxes[6]===boxes[7]&&boxes[7]===boxes[8]&&boxes[6]!=='')||
    (boxes[0]===boxes[4]&&boxes[4]===boxes[8]&&boxes[0]!=='')||
    (boxes[2]===boxes[4]&&boxes[4]===boxes[6]&&boxes[2]!=='')||
    (boxes[1]===boxes[4]&&boxes[4]===boxes[7]&&boxes[1]!=='')||
    (boxes[0]===boxes[3]&&boxes[3]===boxes[6]&&boxes[0]!=='')||
    (boxes[2]===boxes[5]&&boxes[5]===boxes[8]&&boxes[2]!=='')
  );
}

function getBoxes(): Array<string> {
  const boxesContent: Array<string> = [];
  for(let i = 0; i <= 8; i++){
    const box = document.querySelector(`#box-${i}`) as HTMLElement;
    const boxContent: string | null = box?.textContent;
    if(boxContent === null) boxesContent.push('');
    else{
      boxesContent.push(boxContent);
    }
  }
  return boxesContent;
}

function switchPlayer(): void {
  turn = turn === 'X' ? 'O' : 'X';
}

function createBoard(): void{   
  for(let i = 0; i < 9; i++) makeBox(i);
}

function makeBox(i: number):void{  
  const box:HTMLDivElement= document.createElement('div');
  box.className = 'box';
  box.id = `box-${i}`;
  box.textContent = '';
  board.append(box);
}

main();


