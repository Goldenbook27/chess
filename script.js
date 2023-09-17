const gameBoard = document.querySelector('#gameboard')
const playerDisplay = document.querySelector('#player')
const infoDisplay = document.querySelector("#info-display")
const width = 8
let playerGo = 'black'
playerDisplay.textContent = 'black'
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
          square.firstChild?.setAttribute('draggable',true)
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

const allSquares = document.querySelectorAll('#gameboard .square')

allSquares.forEach(square =>{
  square.addEventListener('dragstart',dragStart)
  square.addEventListener('dragover',dragOver)
  square.addEventListener('drop',dragDrop)
})
let startPositionId
let draggedElement

function dragStart(e){
  startPositionId = e.target.parentNode.getAttribute('square-id')
  draggedElement = e.target
}

function dragOver(e){
  e.preventDefault()
}

function dragDrop(e){
   e.stopPropagation()
   const taken = e.target.classList.contains('piece')
  //  e.target.parentNode.append(draggedElement)
  //  e.target.append(draggedElement)
}
