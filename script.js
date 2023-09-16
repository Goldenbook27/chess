const gameBoard = document.querySelector('#gameboard')
const playerDisplay = document.querySelector('#player')
const infoDisplay = document.querySelector("#info-display")
const width = 8
const startPieces = [
     Rook, Knight, Bishop, Queen, King, Bishop, Knight,Rook,
     Pawn,   Pawn,  Pawn,  Pawn,  Pawn,  Pawn,  Pawn, Pawn,
     '', '', '', '', '', '', '', '', 
     '', '', '', '', '', '', '', '', 
     '', '', '', '', '', '', '', '', 
     '', '', '', '', '', '', '', '', 
     Pawn,Pawn,Pawn,Pawn,Pawn,Pawn,Pawn, Pawn,
     Rook,Knight,Bishop,King,Queen,Bishop,Knight,Rook
]

function createBoard(){
    startPieces.forEach((startPiece,i)=>{
          const square = document.createElement('div')
          square.classList.add('square')
          square.innerHTML = startPiece
          square.setAttribute('square-id',i)
        //   square.classList.add('beige')
          const row = Math.floor((63 - i )/ 8) +1
          if(row%2===0){
            square.classList.add(i%2=== 0 ? "beige": "brown")
          }
          else{
            square.classList.add(i%2===0 ? "brown" : "beige")
          }
          if(i<=15){
            square.firstChild.firstChild.classList.add('white')
          }
          if(i>=48){
            square.firstChild.firstChild.classList.add('black')

          }
          gameBoard.append(square)
    })
}
createBoard()