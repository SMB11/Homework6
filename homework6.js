const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = function(){
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(200, 600);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 0);
ctx.lineTo(400, 600);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(600, 400);
ctx.stroke();

  }
  background();
  const tic = new Image();
  tic.src = 'http://cliparts101.com/files/197/EDC040ABED2713A8E919FA39772EC8FA/Brush_X.png';
  const tac = new Image();
  tac.src ='http://www.clipartsfree.net/vector/medium/clipart-0123_Clip_Art.png';
  
  let isPlayer = true  ;
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  const nextMove = function(x){
    for (let i=0;i<x.length;i++){
      for (let j=0;j<x.length;j++){
        if(x[i][j]===" "){
          return [i,j];       
        }
      }
      
    }
  };
  const makeMove = function(board, location, isX) {
    if((location[0] === 0 || location[0] === 1 || location[0] === 2) && (location[1] === 0 || location[1] === 1 || location[1] === 2)) {
      if(isX) {
        board[location[0]][location[1]] = 'x';
      } else {
        board[location[0]][location[1]] = 'o';
      }
      return 0;
    }
    return -1;
  };
  
  const findWinner = function(board){
    for(i=0;i<board.length;i++){
      if(board[i][0]===board[i][1] && board[i][1]===board[i][2] && board[i][1] !== ' '){
        return {
          winner: board[i][0],
          winningLocations: [[i,0],[i,1],[i,2]]
        } 
      }
    }
    for(i=0;i<board.length;i++){
      if(board[0][i]===board[1][i] && board[1][i]===board[2][i] && board[1][i] !== ' '){
        return {
          winner: board[0][i],
          winningLocations: [[0,i],[0,i],[0,i]]
        } 
      }
    }
    if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0] !== ' '){
      return {
        winner: board[1][1],
        winningLocations: [[0,0],[1,1],[2,2]]
      } 
    }
    if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2] !== ' '){
      return {
        winner: board[1][1],
        winningLocations: [[0,2],[1,1],[2,0]]
      } 
    }
  };  
  

  const drawX = function(x,y){
    ctx.drawImage(tic, x, y,150,150);
  };
  const drawO = function(x,y){
    ctx.drawImage(tac, x, y,150,150);
  };
  
  const player = function() {
    if(!isPlayer) {
      const computer = nextMove(board);
      if(makeMove(board, computer) === -1) {
        makeMove(board, computer);
        drawO(computer[1] * (canvas.width / 3), computer[0] * (canvas.width / 3));
      }
    }
    isPlayer = !isPlayer;
  };
  player()
  let Win = false;
  let First = false;
  canvas.addEventListener('click', function(evt) {
    if(board[Math.floor(evt.offsetY/(canvas.width / 3))][Math.floor(evt.offsetX/(canvas.width / 3))] = ' ') {

      board[Math.floor(evt.offsetY/(canvas.width / 3))][Math.floor(evt.offsetX/(canvas.width / 3))] = 'x';

      drawX(Math.floor(evt.offsetX/(canvas.width / 3)) * (canvas.width / 3), 

        Math.floor(evt.offsetY/(canvas.width / 3)) * (canvas.width / 3));
      First = false;
      isPlayer = false;
    }
    if(Win) {
      for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
          board[i][j] = ' ';
        }
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      background();
      Win = false;
      isPlayer = !isPlayer;
      player();
      First = true;
    }
    if(findWinner(board)) {
      Win = true;
    }
  });
  
  