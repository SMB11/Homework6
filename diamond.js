// recursion version
// var switching = false; // for making opposite function -spaces,+ stars


// const stars = function (n, type) {
// 	if (n===0) {
// 		return "";
// 	}

// 	return type + stars(n-1, type); 
// };

// const spaces = function (n) {
// 	if (n===0) {
// 		return "";
// 	}

// 	return " " + spaces(n-1); 
// };

// const diamond = function(mLength,type){
//   if(mLength %2 ===0){
//     mLength=mLength-1;
//   }
// const StarsandSpaces = function(number,star,type,space){
// 	if(number===0){
// 		return "";
// 	}
// 	console.log(spaces(space)+stars(star,type));
// 	if (space !== 0 && switching === false) {
// 		StarsandSpaces(number-1,star+2,type,space-1);
// 	}
// 	else if (space === 0 || switching === true) {
// 	  switching = true;
// 		StarsandSpaces(number-1,star-2,type,space+1);
// 	}
// };

// 	StarsandSpaces(mLength,1,type,(mLength-1)/2);
// };
// diamond(50,"*");




//loop version

// const diamond = function(length,sgn){
  
//   if(length % 2 === 0){
//     length = length-1;
//   }
  
// const sign = function(n,type){
//   let x = '';
//   for(let i = 0; i < n; i++){
//     x = x + type;
//   }
//   return x;
// }
// let spaces = (length-1)/2;
// let stars = 1;
// for(let i = 1; i <= length; i++){
//   console.log(sign(spaces, " ") + sign(stars,sgn));
// if(i <= length/2){
//   spaces = spaces - 1;
//   stars = stars + 2
// }
// else{
//   spaces = spaces + 1;
//   stars = stars-2
// }
// }
// }
// diamond(9,"*");

// ex.3  1st variant
// //   const rand = function(){
// //     return Math.floor((Math.random()*2) + 0.7)
// //   }
// // const nextMove = function(board,isX){
// //   var sign = '';
// //   if(isX){
// //     sign = "X";
// //   }
// //   else{
// //     sign = "O"
// //   }
// //   return move(sign);
// // }

// // const move = function(arg) {
// //   var x = rand();
// //   var y = rand();
  
// //   if(board[x][y] === ' '){
// //     board[x][y] = val;
// //   }
// //   else{
// //     move(val);
// //   }
// //   return [x,y]
// // }


// 2nd variant

// const board = [
// 	[' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' ']
// ];
// const nextMove = function(x){
// 	for (let i=0;i<x.length;i++){
// 		for (let j=0;j<x.length;j++){
// 			if(x[i][j]===" "){
// 				return [i,j];				
// 			}
// 		}

// 	}
// };
// nextMove(board)

// ex.4 
// const makeMove = function(board, location, isX) {
// 	if((location[0] === 0 || location[0] === 1 || location[0] === 2) && (location[1] === 0 || location[1] === 1 || location[1] === 2)) {
// 		if(isX) {
// 			board[location[0]][location[1]] = 'X';
// 		} else {
// 			board[location[0]][location[1]] = 'O';
// 		}
// 		return 0;
// 	}
// 	return -1;
// };

// ex 5
// const findWinner = function(board){
// 	for(i=0;i<board.length;i++){
// 	if(board[i][0]===board[i][1] && board[i][1]===board[i][2] && board[i][1]!==' '){
// 		return {
// 			winner: board[i][0],
// 			winningLocations: [[i,0],[i,1],[i,2]]
// 			} 
// 		}
// 	}
// 	for(i=0;i<board.length;i++){
// 		if(board[0][i]===board[1][i] && board[1][i]===board[2][i] && board[1][i]!==' '){
// 		return {
// 			winner: board[0][i],
// 			winningLocations: [[0,i],[0,i],[0,i]]
// 				} 
// 			}
// 	}
// 	if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0]!==' '){
// 	return {
//     winner: board[1][1],
//     winningLocations: [[0,0],[1,1],[2,2]]
// 		} 
// 	}
// 	if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2]!==' '){
// 	return {
//     winner: board[1][1],
//     winningLocations: [[0,2],[1,1],[2,0]]
// 		} 
// 	}
// };	


// ex.6 
// let isX = true;
// while(true){
// 	let next = nextMove(board, isX);
// 	if(makeMove(board, next, isX) === -1) {
// 		alert("something is wrong");
// 		break;
// 	}
// 	makeMove(board, next, isX);
// 	if(findWinner(board) !== undefined) {
// 		alert(findWinner(board)["winner"] + " win!!!!!!!!!!");
// 		break;
// 	}
// 	isX = !isX;
// }



