function init() {

  const gameBoard = document.querySelector('#board')
  const infoDisplay = document.querySelector('#message')
  const startCells = ['', '', '', '', '', '', '', '', '']
  let playerOne = 'circle'
  infoDisplay.innerText = 'Circle goes first'

  // const winningCombs = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6]
  // ]

  function createBoard() {
    startCells.forEach((cell, index) => {
      const cellElement = document.createElement('div')
      cellElement.classList.add('square')
      gameBoard.appendChild(cellElement)
      cellElement.id = index
      cellElement.addEventListener('click', addItem)

    })
  }

  createBoard()

  function addItem(e) {
    const addDisplay = document.createElement('div')
    addDisplay.classList.add(playerOne)
    e.target.append(addDisplay)
    playerOne = playerOne === 'circle' ? 'cross' : 'circle'
    infoDisplay.innerText = 'It is now ' + playerOne + ' turn'
    e.target.removeEventListener('click', addItem)
    winningPlayer()
  }

  function winningPlayer() {

  }






























}

window.addEventListener('DOMContentLoaded', init)