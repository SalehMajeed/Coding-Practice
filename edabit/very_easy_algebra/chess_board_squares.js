function chess_board(pole) {
	return (pole.charCodeAt(0) + pole.charCodeAt(1)) % 2 == 0 ? 'black' : 'white';
}

console.log(chess_board('a1'));
console.log(chess_board('e5'));
console.log(chess_board('d1'));
