function init() {

  const gameBoard = document.querySelector('#board')
  const infoDisplay = document.querySelector('#message')


  let gameActive = true

  const startCells = ['', '', '', '', '', '', '', '', '']
  let currentPlayer = 'circle'

  const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`
  const winningMessage = () => `Player ${currentPlayer} has won!`
  const tieMessage = () => 'It\'s a tie'


  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  function createBoard() {
    startCells.forEach((cell, index) => {
      const cellElement = document.createElement('div')
      cellElement.classList.add('square')
      gameBoard.appendChild(cellElement)
      cellElement.id = index
      cellElement.addEventListener('click', addItem)

    })
    infoDisplay.innerText = currentPlayerTurn()
  }

  createBoard()

  function addItem(e) {
    const handlePlayerTurn = document.createElement('div')
    handlePlayerTurn.classList.add(currentPlayer)
    e.target.append(handlePlayerTurn)
    const cellIndex = e.target.id
    startCells[cellIndex] = currentPlayer
    currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle'
    // console.log(currentPlayer)

    e.target.removeEventListener('click', addItem)
    infoDisplay.innerText = currentPlayerTurn()
    winningPlayer()
  }

  function winningPlayer() {
    let roundWon = false
    for (let i = 0; i <= 7; i++) {
      const winningCondition = winningCombos[i]

      const a = startCells[winningCondition[0]]
      const b = startCells[winningCondition[1]]
      const c = startCells[winningCondition[2]]

      if (a === '' || b === '' || c === '')
        continue
      if (a === b && b === c) {
        roundWon = true
        break
      }
    }


    if (roundWon) {
      currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle'
      infoDisplay.innerText = winningMessage()
      gameActive = false

      return
    }

    const roundDraw = !startCells.includes('')
    if (roundDraw) {
      infoDisplay.innerText = tieMessage()
      gameActive = false
      return
    }
  }

  function restartGame() {
    gameActive = true
    startCells.fill('')
    currentPlayer = 'circle'
    infoDisplay.innerText = currentPlayerTurn()
    gameBoard.innerHTML = ''
    createBoard()
  }


  document.querySelector('.restart-game').addEventListener('click', restartGame)

}

window.addEventListener('DOMContentLoaded', init)